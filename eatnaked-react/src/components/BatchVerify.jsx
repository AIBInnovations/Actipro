import { useState } from "react";
import { Link } from "react-router-dom";

import { findBatch, SAMPLE_PREFIXES, BATCH_DATA_IS_SAMPLE } from "../data/batches.js";
import { findVariant } from "../data/variants.js";

/**
 * Lot Number lookup.
 *
 * Reads from a local sample table, not a real batch system - so the panel says
 * so, plainly and above the result rather than in small print underneath. A
 * verification tool that quietly invents records would be worse than no tool.
 */
export default function BatchVerify() {
  const [lot, setLot] = useState("");
  const [result, setResult] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();

    const trimmed = lot.trim();
    if (trimmed.length < 2) {
      setResult({ state: "short" });
      return;
    }

    const batch = findBatch(trimmed);
    setResult(batch ? { state: "found", batch } : { state: "missing" });
  };

  const variant = result?.batch ? findVariant(result.batch.variant) : null;

  return (
    <div className="verify">
      {BATCH_DATA_IS_SAMPLE ? (
        <p className="verify__sample" role="note">
          Showing sample records while the lookup is connected to the live batch system. Try{" "}
          {SAMPLE_PREFIXES.join(", ")} to see how it works, or email your real Lot Number to{" "}
          <a href="mailto:contact@madhurioils.com">contact@madhurioils.com</a> and we'll check it by hand.
        </p>
      ) : null}

      <form className="verify__form" onSubmit={onSubmit}>
        <label className="field">
          <span className="field__label">Lot Number</span>
          <input
            className="field__input"
            type="text"
            name="lot"
            inputMode="text"
            autoComplete="off"
            placeholder="e.g. AC2547B"
            value={lot}
            onChange={(e) => {
              setLot(e.target.value);
              if (result) setResult(null);
            }}
          />
        </label>

        <button type="submit" className="contact-submit">
          Check this batch
        </button>
      </form>

      <p className="verify__hint">
        It's printed next to “Lot No.” on the back of the pack. The first two characters identify the batch.
      </p>

      {result?.state === "short" ? (
        <p className="field__error" role="alert">
          Please enter at least the first two characters.
        </p>
      ) : null}

      {result?.state === "missing" ? (
        <div className="verify__result is--missing" role="status">
          <h3 className="verify__h3">No record for that Lot Number</h3>
          <p className="verify__p">
            Check the characters against the pack, or send it to{" "}
            <a href="mailto:contact@madhurioils.com">contact@madhurioils.com</a> and we'll look it up for you.
          </p>
        </div>
      ) : null}

      {result?.state === "found" ? (
        <div className="verify__result" role="status">
          <span className="verify__found">Batch {result.batch.prefix} · verified</span>

          <h3 className="verify__h3">{variant ? variant.name : "Actipro"}</h3>

          <dl className="verify__meta">
            <div>
              <dt>Manufactured on</dt>
              <dd>{result.batch.manufactured}</dd>
            </div>
            <div>
              <dt>Packed on</dt>
              <dd>{result.batch.packed}</dd>
            </div>
            <div>
              <dt>Quality testing</dt>
              <dd>{result.batch.tests}</dd>
            </div>
            <div>
              <dt>Plant</dt>
              <dd>{result.batch.plant}</dd>
            </div>
          </dl>

          {variant ? (
            <Link to={`/products/${variant.key}`} className="page-link">
              See {variant.name}
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
