/**
 * Port of the reference `ImageSequenceLoader`.
 *
 * Decodes a numbered frame sequence in batches so the main thread stays
 * responsive, keeps a separate cache per orientation, and reports progress
 * to the preloader.
 */
export class ImageSequenceLoader {
  constructor() {
    this.basePath = null;
    this.images = [];
    this.orientation = window.matchMedia("(orientation: landscape)").matches ? "landscape" : "portrait";

    this.onOrientationChange = null;
    this.imagesLandscape = [];
    this.imagesPortrait = [];

    // Defaults
    this.batchCount = 5;
    this.concurrency = 6;

    this.mql = window.matchMedia("(orientation: landscape)");
    this.handleOrientation = (e) => {
      this.orientation = e.matches ? "landscape" : "portrait";
      if (this.onOrientationChange) this.onOrientationChange(this.orientation);
    };
    this.mql.addEventListener("change", this.handleOrientation);
  }

  setImagesConfig(config) {
    this.extension = config.extension;
    this.totalFrames = config.totalFrames;
    this.landscapeBasePath = config.landscapeBasePath;
    this.portraitBasePath = config.portraitBasePath;

    if (typeof config.batchCount === "number" && config.batchCount > 0) {
      this.batchCount = Math.floor(config.batchCount);
    }
    if (typeof config.concurrency === "number" && config.concurrency > 0) {
      this.concurrency = Math.floor(config.concurrency);
    }

    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    this.basePath = isLandscape ? this.landscapeBasePath : this.portraitBasePath;

    this.frames = {
      currentIndex: 0,
      maxIndex: this.totalFrames - 1,
      lastRenderedFrame: -1,
      threshold: 0,
    };

    return this;
  }

  loadOne(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = "async";

      img.onload = async () => {
        if (img.decode) {
          try {
            await img.decode();
          } catch {
            /* decode is best-effort */
          }
        }
        resolve({ ok: true, img });
      };

      img.onerror = () => resolve({ ok: false, img: null });

      img.src = url;
    });
  }

  async runPool(indices, basePath, onItemDone) {
    const limit = Math.max(1, this.concurrency);
    let cursor = 0;

    const worker = async () => {
      while (cursor < indices.length) {
        if (this.destroyed) return;
        const myPos = cursor++;
        const i = indices[myPos];

        const url = `${basePath}${i}.${this.extension}`;
        const res = await this.loadOne(url);
        onItemDone(i, res);
      }
    };

    const workers = [];
    const workerCount = Math.min(limit, indices.length);
    for (let w = 0; w < workerCount; w++) workers.push(worker());

    await Promise.all(workers);
  }

  async preload(onProgress) {
    const basePath = this.orientation === "landscape" ? this.landscapeBasePath : this.portraitBasePath;
    const cache = this.orientation === "landscape" ? this.imagesLandscape : this.imagesPortrait;

    if (cache.length > 0) return { images: cache };

    const total = this.totalFrames;
    const images = new Array(total);

    let loaded = 0;
    const report = () => {
      if (!onProgress) return;
      onProgress(Math.floor((loaded / total) * 100));
    };

    const batches = Math.max(1, this.batchCount);
    const batchSize = Math.ceil(total / batches);

    for (let b = 0; b < batches; b++) {
      if (this.destroyed) break;

      const start = b * batchSize;
      const end = Math.min(start + batchSize, total);
      if (start >= total) break;

      const indices = [];
      for (let i = start; i < end; i++) indices.push(i);

      await this.runPool(indices, basePath, (i, res) => {
        loaded++;
        if (res.ok) images[i] = res.img;
        report();
      });

      await new Promise((r) => setTimeout(r, 80));
    }

    const finalImages = images.filter(Boolean);

    if (this.orientation === "landscape") this.imagesLandscape = finalImages;
    else this.imagesPortrait = finalImages;

    return { images: finalImages };
  }

  destroy() {
    this.destroyed = true;
    this.onOrientationChange = null;
    this.mql.removeEventListener("change", this.handleOrientation);
    this.imagesLandscape = [];
    this.imagesPortrait = [];
  }
}
