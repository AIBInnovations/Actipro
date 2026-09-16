import LegalPage from "../components/LegalPage.jsx";

/**
 * Privacy Policy.
 *
 * !! Not drafted or reviewed by a lawyer. !!
 *
 * Written against what this site actually does today, verified rather than
 * assumed: no analytics script, no cookies set by us, no browser storage, and
 * self-hosted fonts. The one third party that can set anything is the Vimeo
 * player embedded on the homepage, so it gets named. Re-check this page if any
 * of that changes - adding an analytics tag makes section 04 untrue.
 */

const SECTIONS = [
  {
    heading: "Who this applies to",
    body: [
      "This policy covers actipro.in and any page on it. The site is operated by Madhuri Refiners Pvt. Ltd., Head Office: 12 Race Course Road, Dil Pasand Kothi, Prakoshth No. 301, Block No. 6, Princess Empire, Indore (M.P.) - 452001, India.",
      "It explains what happens to information you give us here. It does not cover what a marketplace, distributor or social media platform does with your data when you deal with them.",
    ],
  },
  {
    heading: "What we collect",
    body: [
      "Only what you type into our contact form: your name, email address, phone number, the subject, and your message. Nothing else.",
      "We do not ask you to create an account. We do not take payments on this site, so we never see card or banking details. We do not buy contact data from anyone.",
    ],
  },
  {
    heading: "Why we collect it",
    body: [
      "To answer you. If you ask us to check a Lot Number, we use the details to look up that batch and reply. If you ask about gifting or bulk orders, we use them to send you options.",
      "We do not add you to a mailing list because you contacted us, and we do not sell, rent or share your details with anyone for marketing.",
    ],
  },
  {
    heading: "Cookies and tracking",
    body: [
      "We do not set cookies on this site. We do not run analytics, advertising pixels or session recording, and we do not store anything in your browser between visits.",
      "Our fonts are served from our own domain rather than a font network, so loading a page here does not tell a third party that you visited.",
      "The one exception is the video on our homepage, which is played through Vimeo. When it loads, Vimeo may set its own cookies and receive your IP address, and that is governed by Vimeo's privacy policy rather than ours.",
    ],
  },
  {
    heading: "Who can see your message",
    body: [
      "Enquiries go to our Customer Care Cell at the head office address. They are read by the people who handle customer questions and, where relevant, by the quality team who hold the batch records.",
      "We may use a third-party form or email service to deliver messages to us. Where we do, it acts on our instructions and only to deliver your enquiry.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep enquiry correspondence for as long as we need it to deal with your question and to keep a record of complaints and batch queries, and no longer than is reasonable for that purpose.",
      "If you would like your correspondence deleted, ask us and we will do it, unless we are required to retain it under food safety or other law.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask what information we hold about you, ask us to correct it, or ask us to delete it. Write to contact@madhurioils.com and we will respond.",
      "If you are not satisfied with how we have handled your information, tell us first and we will try to put it right.",
    ],
  },
  {
    heading: "Children",
    body: [
      "This site is aimed at people buying and cooking with cooking oil. It is not directed at children, and we do not knowingly collect information from them.",
    ],
  },
  {
    heading: "Changes and contact",
    body: [
      "If we change how this site handles data, for example by adding analytics, we will update this page, and the date at the top will show when.",
      "Questions about privacy: contact@madhurioils.com, or 72248 70701, Monday to Saturday, 9am to 7pm.",
    ],
  },
];

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      lede="Short version: we collect what you type into the contact form, we use it to reply to you, and this site sets no cookies."
      updated="14 September 2026"
      sections={SECTIONS}
    />
  );
}
