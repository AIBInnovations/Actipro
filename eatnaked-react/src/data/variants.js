/**
 * The three variants, in one place.
 *
 * Range (homepage), Products, The Process and the Oil Bot all describe the
 * same three oils; keeping three copies of "High Absorbent Refining" in three
 * components is how they drift apart. Copy here is taken from the website plan
 * document rather than rewritten.
 */

export const VARIANTS = [
  {
    key: "sunflower",
    name: "Refined Sunflower Oil",
    short: "Sunflower Oil",
    use: "Light sautéing & everyday meals",
    /** One line for cards. */
    blurb:
      "Neutral, light, and stable enough to disappear into whatever you're making. One reliable oil for daily cooking, without thinking too hard about it.",
    /** The Oil Bot's longer answer. */
    recommendation:
      "Neutral, light, and stable enough to disappear into whatever you're making. If you want one reliable oil for daily cooking without thinking too hard about it, this is it.",
    process: "Advanced Dewaxing Technology",
    processShort: "ADT",
    problem: "Wax content",
    processLede:
      "Sunflower oil naturally carries wax that can cloud the oil and affect its stability. ADT solves it in three steps.",
    steps: [
      { n: "01", title: "Cryo Filtration", body: "Chills the oil so its natural wax solidifies and can be removed." },
      {
        n: "02",
        title: "Multi-Stage Purification",
        body: "Filters out what remains, for a smoother texture and no unwanted residue.",
      },
      {
        n: "03",
        title: "Low-Wax, Clear Oil",
        body: "The result stays clear and carries nothing into your body that shouldn't be there.",
      },
    ],
    inside: [
      { title: "Low Wax", body: "Dewaxed so the oil stays clear rather than clouding in the bottle." },
      { title: "Cryo Filtered", body: "Chilled filtration rather than heat alone, so stability isn't bought with damage." },
      { title: "Vitamin E", body: "A natural antioxidant that helps protect your cells." },
      { title: "Vitamin A & D", body: "Fortified to the levels declared on the pack." },
    ],
    badges: ["Low Wax", "Cryo Filtered", "Vitamin E"],
    pack: "/assets/img/pack-sunflower.webp",
    scene: "/assets/img/scene-everyday-meals.webp",
    ingredient: "/assets/img/ing-sunflower.webp",
    /* Transcribed from the pack artwork (Actipro - Lifestyle Oil (Sunflower).pdf).
       Per 100g, serving size 10g. `rda` is the pack's "per serve % contribution
       to RDA" column; null renders as the pack's own em dash. */
    nutrition: [
      ["Energy (kcal)", "900", "4.50"],
      ["Protein (g)", "0", null],
      ["Carbohydrate (g)", "0", null],
      ["Total Sugar (g)", "0", null],
      ["Added Sugar (g)", "0", null],
      ["Total Fat (g)", "100", "14.92"],
      ["Saturated Fat (g) #NMT", "11", "5"],
      ["Trans Fat (g) #NMT", "2", "10"],
      ["Sodium (mg)", "0", null],
      ["Cholesterol (mg)", "0", null],
      ["Monounsaturated Fatty Acids (g), Min.", "24", null],
      ["Polyunsaturated Fatty Acids (g), Min.", "61", null],
      ["Tocopherols/Tocotrienols (Vit-E) (mg)", "55", null],
      ["Omega-3", "0.15", null],
      ["Omega-6", "65", null],
      ["Added Vitamin A (IU/mcg)@", "2500/750", null],
      ["Added Vitamin D (IU/mcg)@", "450/11.25", null],
    ],
  },
  {
    key: "corn",
    name: "Refined Corn Oil",
    short: "Corn Oil",
    use: "Deep frying & fried snacks",
    blurb:
      "Engineered specifically to be absorbed less during frying, so pakoras, chips and fried snacks come out lighter instead of soaking up oil.",
    recommendation:
      "Engineered specifically to be absorbed less during frying, so pakoras, chips and fried snacks come out lighter instead of soaking up oil. If frying is a regular part of your kitchen, this is the one built for it.",
    process: "High Absorbent Refining",
    processShort: "HAR",
    problem: "Oil absorption",
    processLede:
      "Corn oil's biggest real-world impact is how much of it your food actually soaks up during frying. The refining is built around that one number.",
    steps: [
      {
        n: "01",
        title: "Advanced Refining",
        body: "Multi-stage refining removes impurities, odour and excess moisture.",
      },
      {
        n: "02",
        title: "Less Oil Absorption",
        body: "A measurable outcome of how the oil behaves at heat, not a marketing claim.",
      },
      {
        n: "03",
        title: "Nutrient Retention",
        body: "Natural antioxidants and Vitamin E survive processing rather than being stripped out.",
      },
    ],
    inside: [
      {
        title: "Versatility",
        body: "Suitable from light sautéing to high-heat frying, without switching oils mid-recipe.",
      },
      { title: "Vitamin E", body: "A natural antioxidant that helps protect your cells." },
      { title: "Phytosterols", body: "Plant compounds associated with anti-inflammatory support." },
      {
        title: "Natural, Mild Taste",
        body: "Refining neutralises corn oil's naturally strong flavour, so it never fights your dish.",
      },
    ],
    badges: ["Versatile", "Vitamin E", "Phytosterols"],
    pack: "/assets/img/pack-corn.webp",
    scene: "/assets/img/scene-deep-frying.webp",
    ingredient: "/assets/img/ing-corn.webp",
    /* Transcribed from the pack artwork (Actipro - Lifestyle Oil Corn.pdf). */
    nutrition: [
      ["Energy (kcal)", "900", "4.50"],
      ["Protein (g)", "0", null],
      ["Carbohydrate (g)", "0", null],
      ["Total Sugar (g)", "0", null],
      ["Added Sugar (g)", "0", null],
      ["Total Fat (g)", "100", "14.92"],
      ["Saturated Fat (g) #NMT", "15", "6.81"],
      ["Trans Fat (g) #NMT", "2", "10"],
      ["Sodium (mg)", "0", null],
      ["Cholesterol (mg)", "0", null],
      ["Monounsaturated Fatty Acids (g), Min.", "28", null],
      ["Polyunsaturated Fatty Acids (g), Min.", "55", null],
      ["Tocopherols/Tocotrienols (Vit-E) (mg)", "75", null],
      ["Omega-3", "1", null],
      ["Omega-6", "55", null],
      ["Added Vitamin A (IU/mcg)@", "2500/750", null],
      ["Added Vitamin D (IU/mcg)@", "450/11.25", null],
    ],
  },
  {
    key: "rice-bran",
    name: "Refined Rice Bran Oil",
    short: "Rice Bran Oil",
    use: "Heart-conscious, everyday cooking",
    blurb:
      "Naturally low in cholesterol with a balanced MUFA/PUFA ratio and plant sterols that help block cholesterol absorption.",
    recommendation:
      "Naturally low in cholesterol with a balanced MUFA/PUFA ratio and plant sterols that help block cholesterol absorption. If you're cooking for a family watching their heart health without compromising on taste, start here.",
    process: "Smart Fry Technology",
    processShort: "SFT",
    problem: "Heat stability",
    processLede:
      "Inspired by Japanese research into how oil behaves at high heat, cryo filtration is combined with controlled-temperature refinement.",
    steps: [
      { n: "01", title: "Cryo Filtration", body: "Keeps the oil naturally stable from the start." },
      { n: "02", title: "Controlled Refinement", body: "Temperature-held, so the good fats survive the process." },
      {
        n: "03",
        title: "Faster Heat Transfer",
        body: "Less oil soaks into food while it fries, without compromising the balance of good fats.",
      },
    ],
    inside: [
      { title: "Cholesterol Free", body: "Naturally low in cholesterol, declared at 0 mg on the pack." },
      { title: "Plant Sterols", body: "Associated with blocking cholesterol absorption." },
      { title: "Balanced MUFA", body: "A MUFA/PUFA ratio that stays balanced through refining." },
      { title: "Heat Stable", body: "Built to hold up at the temperatures Indian cooking actually uses." },
    ],
    badges: ["Cholesterol Free", "Plant Sterols", "Balanced MUFA"],
    pack: "/assets/img/pack-rice-bran.webp",
    scene: "/assets/img/scene-heart-conscious.webp",
    ingredient: "/assets/img/ing-rice-bran.webp",
    /* Transcribed from the pack artwork (Actipro - Lifestyle Oil (Rice Brain).pdf).
       Rice bran is the only variant whose label declares gamma oryzanol and
       phytosterols, so its table is two rows longer than the other two. */
    nutrition: [
      ["Energy (kcal)", "900", "4.50"],
      ["Protein (g)", "0", null],
      ["Carbohydrate (g)", "0", null],
      ["Total Sugar (g)", "0", null],
      ["Added Sugar (g)", "0", null],
      ["Total Fat (g)", "100", "14.92"],
      ["Saturated Fat (g) #NMT", "23", "10.45"],
      ["Trans Fat (g) #NMT", "2", "10"],
      ["Sodium (mg)", "0", null],
      ["Cholesterol (mg)", "0", null],
      ["Monounsaturated Fatty Acids (g), Min.", "44", null],
      ["Polyunsaturated Fatty Acids (g), Min.", "32", null],
      ["Tocopherols/Tocotrienols (Vit-E) (mg)", "65", null],
      ["Gamma Oryzanol (mg)", "1000", null],
      ["Phytosterols (mg)", "3000", null],
      ["Omega-3", "1", null],
      ["Omega-6", "31", null],
      ["Added Vitamin A (IU/mcg)@", "2500/750", null],
      ["Added Vitamin D (IU/mcg)", "450/11.25", null],
    ],
  },
];

export function findVariant(key) {
  return VARIANTS.find((v) => v.key === key) ?? null;
}

/** Carried over from the packaging, and required on every product surface. */
export const DISCLAIMER =
  "Any information given on this page does not claim any diagnosis, treatment, cure, or prevention of any disease.";

/** The table footnotes, carried over verbatim from the pack. */
export const NUTRITION_NOTES = [
  "#NMT: No More Than. IU: International Unit. g: Gram. mg: Milligram. mcg: Microgram. Min: Minimum. @: At the time of packing.",
  "*Approximate values, calculated on the basis of a 2,000 kcal diet, 67g Total Fat, 22g Saturated Fat, 2g Trans Fat, 50g Added Sugar and 2000mg Sodium (5g Salt) requirement for an average adult per day.",
];

export const COMPLIANCE = [
  ["Free from", "Argemone oil, on every variant and every batch."],
  ["Permitted additives", "Antifoaming agent (DMPS, INS 900a) and antioxidant (TBHQ, INS 319), disclosed on pack."],
  ["FSSAI licence", "11424999000132"],
  ["Marketed by", "Madhuri Refiners Pvt. Ltd."],
  [
    "Head office",
    "12 Race Course Road, Dil Pasand Kothi, Prakoshth No. 301, Block No. 6, Princess Empire, Indore (M.P.) - 452001",
  ],
  ["Contact", "contact@madhurioils.com · 72248 70701"],
];
