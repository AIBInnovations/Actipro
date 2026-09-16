import LegalPage from "../components/LegalPage.jsx";

/**
 * Terms and Conditions.
 *
 * !! Not drafted or reviewed by a lawyer. !!
 *
 * Everything below is factual about how this site actually works - it sells
 * nothing, sets no cookies, and defers to the printed label - but it must be
 * read by counsel before launch, and the governing-law clause in particular is
 * a placeholder for whatever the company's standard wording is.
 */

const SECTIONS = [
  {
    heading: "Who we are",
    body: [
      "This website is operated by Madhuri Refiners Pvt. Ltd., Head Office: 12 Race Course Road, Dil Pasand Kothi, Prakoshth No. 301, Block No. 6, Princess Empire, Indore (M.P.) - 452001, India. Actipro is a brand of Madhuri Refiners Pvt. Ltd., operating under FSSAI licence number 11424999000132.",
      "By using this site you agree to these terms. If you do not agree with them, please do not use the site.",
    ],
  },
  {
    heading: "Using this site",
    body: [
      "You may browse, read and share this site freely. You may not use it in any way that is unlawful, that interferes with anyone else's use of it, or that attempts to gain unauthorised access to any system connected to it.",
      "We try to keep the site available and accurate, but we do not guarantee uninterrupted access, and we may change, suspend or withdraw any part of it without notice.",
    ],
  },
  {
    heading: "Product information and labels",
    body: [
      "Nutritional values, ingredient lists, additive declarations and fortification levels published on this site are transcribed from the printed packaging of each variant. We take care to reproduce them accurately.",
      "If anything on this site ever differs from the label on the pack in your hand, the printed label is the authoritative source. Please tell us if you find a discrepancy so we can correct it.",
      "Product images are representative. Packaging design, pack sizes and artwork may change.",
    ],
  },
  {
    heading: "Health and nutrition claims",
    body: [
      "Any information given on this site does not claim any diagnosis, treatment, cure, or prevention of any disease. This is the same disclaimer that appears on our packaging.",
      "Nothing on this site is medical or dietary advice. If you have a health condition or a specific dietary requirement, speak to a qualified professional.",
    ],
  },
  {
    heading: "Batch verification",
    body: [
      "The batch lookup on our product pages is provided for information. It is intended to show the manufacturing and packing details recorded against the Lot Number printed on your pack.",
      "While the lookup is being connected to our live batch records it displays sample records only, and the page says so wherever it appears. For a real batch enquiry in the meantime, email your Lot Number to contact@madhurioils.com and we will check it directly.",
    ],
  },
  {
    heading: "Buying Actipro",
    body: [
      "This site does not sell products, take payment, or process orders. Purchases are made through third-party marketplaces and through our distributors, and those purchases are governed by the terms of whoever you buy from, not by these terms.",
      "Gifting and bulk enquiries made through our contact form are enquiries only. No order exists until it is confirmed by us in writing.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "The Actipro name, the Madhuri Refiners name, our logos, packaging artwork, photography and the text on this site belong to Madhuri Refiners Pvt. Ltd. or are used with permission.",
      "You may not reproduce, distribute or use them commercially without written permission. For press or partnership use, ask us and we will usually say yes.",
    ],
  },
  {
    heading: "Links to other sites",
    body: [
      "This site links to third-party sites, including marketplace listings, mapping services and social media platforms. We are not responsible for their content, their terms, or how they handle your data.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "We provide this site in good faith and take reasonable care over its accuracy, but we do not accept liability for loss arising from reliance on information published here, to the extent permitted by law.",
      "Nothing in these terms limits any liability that cannot lawfully be limited, including liability relating to food safety.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms from time to time. The date at the top of this page shows when they were last changed, and the version published here is the one that applies.",
    ],
  },
  {
    heading: "Governing law and contact",
    body: [
      "These terms are governed by the laws of India, and the courts at Indore, Madhya Pradesh have jurisdiction over any dispute arising from them.",
      "Questions about these terms: contact@madhurioils.com, or 72248 70701, Monday to Saturday, 9am to 7pm.",
    ],
  },
];

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms and Conditions"
      lede="What you can expect from this site, and what we ask of you while you use it."
      updated="14 September 2026"
      sections={SECTIONS}
    />
  );
}
