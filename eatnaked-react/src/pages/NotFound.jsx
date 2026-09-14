import PageShell from "../components/PageShell.jsx";
import CtaButton from "../components/CtaButton.jsx";

/**
 * 404. The nav still links to routes that haven't been built yet (Find Your
 * Oil, Media, Gifting, FAQs), so this page will be seen - it points somewhere
 * useful rather than apologising.
 */
export default function NotFound() {
  return (
    <PageShell
      metaTitle="Page not found"
      metaDescription="This page isn't here yet. Here's where most people are heading."
      eyebrow="404"
      title="This page isn't here yet."
      lede="Either it moved, or it's still being built. Here's where most people are heading."
    >
      <section className="page-section">
        <div className="page-inner is--narrow">
          <div className="page-actions" data-reveal="">
            <CtaButton to="/products" label="See the range" />
            <CtaButton to="/the-process" label="How it's made" className="is--clear" />
            <CtaButton to="/contact-us" label="Contact us" className="is--clear" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
