import { useState } from "react";

import PageShell from "../components/PageShell.jsx";

/**
 * Contact Us.
 *
 * !! The form does not send anything yet. !!
 *
 * `submitEnquiry` below is the single integration point: drop in a Formspree /
 * Web3Forms endpoint (or your own handler) and everything else - validation,
 * pending state, success panel, error panel - already works around it. Until
 * then the email and phone links beneath the form are the paths that actually
 * reach someone, which is why they are given equal weight on the page rather
 * than tucked into the footer.
 */

const FIELDS = [
  { name: "name", label: "Your name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "subject", label: "Subject", type: "text" },
];

const EMPTY = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) errors.name = "Please tell us your name.";

  if (!values.email.trim()) errors.email = "We need an email to reply to.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = "That email doesn't look right.";

  // Indian mobile numbers are ten digits; allow spaces, dashes and +91.
  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone.trim()) errors.phone = "A number helps us call you back.";
  else if (digits.length < 10 || digits.length > 12) errors.phone = "Please enter a ten-digit number.";

  if (!values.subject.trim()) errors.subject = "What is this about?";

  if (!values.message.trim()) errors.message = "Tell us what you'd like to know.";
  else if (values.message.trim().length < 10) errors.message = "A little more detail, please.";

  return errors;
}

/** The one function to replace when a form service is chosen. */
async function submitEnquiry(values) {
  void values;
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true };
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (name) => (event) => {
    const { value } = event.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => (e[name] ? { ...e, [name]: undefined } : e));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");

    try {
      const result = await submitEnquiry(values);
      setStatus(result.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <PageShell
      metaTitle="Contact Us"
      metaDescription="Questions, doubts, or a batch you want checked. Mon to Sat, 9am to 7pm, and the Oil Bot until 11pm."
      eyebrow="Contact Us"
      title="Questions, doubts, or a batch you want checked."
      lede="Tell us what you need and we'll come back to you. Business hours are Monday to Saturday, 9am to 7pm, the Oil Bot answers until 11pm."
    >
      <section className="page-section">
        <div className="page-inner contact-layout">
          <div className="contact-form-wrap" data-reveal="">
            {status === "sent" ? (
              <div className="contact-success" role="status">
                <h2 className="contact-success__h2">Thanks, {values.name.split(" ")[0] || "there"}.</h2>
                <p className="contact-success__p">
                  We've got your message. If it's urgent, email{" "}
                  <a href="mailto:contact@madhurioils.com">contact@madhurioils.com</a> or call{" "}
                  <a href="tel:+917224870701">72248 70701</a> and you'll reach someone directly.
                </p>
                <button
                  type="button"
                  className="page-link"
                  onClick={() => {
                    setValues(EMPTY);
                    setStatus("idle");
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit} noValidate>
                <div className="contact-form__grid">
                  {FIELDS.map((f) => (
                    <label className="field" key={f.name} data-invalid={errors[f.name] ? "true" : "false"}>
                      <span className="field__label">{f.label}</span>
                      <input
                        className="field__input"
                        type={f.type}
                        name={f.name}
                        autoComplete={f.autoComplete}
                        value={values[f.name]}
                        onChange={update(f.name)}
                        aria-invalid={errors[f.name] ? "true" : "false"}
                      />
                      {errors[f.name] ? <span className="field__error">{errors[f.name]}</span> : null}
                    </label>
                  ))}
                </div>

                <label className="field" data-invalid={errors.message ? "true" : "false"}>
                  <span className="field__label">Message</span>
                  <textarea
                    className="field__input is--area"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={update("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message ? <span className="field__error">{errors.message}</span> : null}
                </label>

                {status === "error" ? (
                  <p className="field__error" role="alert">
                    Something went wrong sending that. Please email contact@madhurioils.com instead.
                  </p>
                ) : null}

                <button type="submit" className="contact-submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>

          <aside className="contact-aside" data-reveal="">
            <div className="contact-block">
              <h2 className="contact-block__h2">Reach us directly</h2>
              <a className="contact-block__link" href="mailto:contact@madhurioils.com">
                contact@madhurioils.com
              </a>
              <a className="contact-block__link" href="tel:+917224870701">
                72248 70701
              </a>
            </div>

            <div className="contact-block">
              <h2 className="contact-block__h2">Business hours</h2>
              <p className="contact-block__p">Monday to Saturday · 9am to 7pm</p>
              <p className="contact-block__p">Oil Bot · 9am to 11pm, every day</p>
            </div>

            <div className="contact-block">
              <h2 className="contact-block__h2">Office</h2>
              <p className="contact-block__p">Madhuri Refiners Pvt. Ltd.</p>
              <p className="contact-block__p">Indore, Madhya Pradesh</p>
              <a
                className="contact-block__link"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/search/?api=1&query=Madhuri+Refiners+Pvt+Ltd+Indore"
              >
                Open in Maps
              </a>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
