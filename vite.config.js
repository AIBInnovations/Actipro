import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    // Split the animation libraries out of the app chunk: they change far less
    // often than the page does, so they stay cached across deploys.
    rollupOptions: {
      output: {
        advancedChunks: {
          groups: [
            { name: "gsap", test: /node_modules[/\\]gsap[/\\]/ },
            { name: "swiper", test: /node_modules[/\\]swiper[/\\]/ },
            { name: "vimeo", test: /node_modules[/\\]@vimeo[/\\]/ },
            { name: "react-vendor", test: /node_modules[/\\](react|react-dom|scheduler)[/\\]/ },
          ],
        },
      },
    },
  },
});
