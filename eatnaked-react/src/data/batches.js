/**
 * Sample batch records for the Lot Number lookup.
 *
 * !! These are illustrative, not real manufacturing records. !!
 *
 * The pack tells people to "scan the QR Code and see the first two characters
 * of Lot No.", and the plan asks for a lookup keyed on exactly that - so the
 * index is the two-character prefix. Replace `BATCHES` with a fetch against the
 * real batch system and `findBatch` keeps working unchanged.
 */

export const BATCH_DATA_IS_SAMPLE = true;

const BATCHES = {
  AC: {
    prefix: "AC",
    variant: "sunflower",
    manufactured: "12 August 2026",
    packed: "14 August 2026",
    plant: "Madhuri Refiners Pvt. Ltd., Indore (M.P.)",
    tests: "Passed in-house quality testing on 13 August 2026",
  },
  CO: {
    prefix: "CO",
    variant: "corn",
    manufactured: "03 September 2026",
    packed: "05 September 2026",
    plant: "Madhuri Refiners Pvt. Ltd., Indore (M.P.)",
    tests: "Passed in-house quality testing on 04 September 2026",
  },
  RB: {
    prefix: "RB",
    variant: "rice-bran",
    manufactured: "28 July 2026",
    packed: "30 July 2026",
    plant: "Madhuri Refiners Pvt. Ltd., Indore (M.P.)",
    tests: "Passed in-house quality testing on 29 July 2026",
  },
};

/**
 * Takes whatever the customer typed off the bottle and matches on the first
 * two characters, so a full lot number works as well as a two-letter prefix.
 */
export function findBatch(input) {
  const cleaned = String(input ?? "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

  if (cleaned.length < 2) return null;
  return BATCHES[cleaned.slice(0, 2)] ?? null;
}

export const SAMPLE_PREFIXES = Object.keys(BATCHES);
