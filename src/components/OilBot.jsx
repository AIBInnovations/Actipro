import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { VARIANTS } from "../data/variants.js";

/**
 * Oil Bot - the floating widget the homepage plan wants "visible from first
 * load". Until now the bot existed only as three text links (navbar, footer,
 * and the CTA at the very bottom), so a visitor who never scrolled never saw
 * it.
 *
 * Deliberately rules-based, not a language model: the plan's Find Your Oil
 * flow is one question with three answers, and a scripted tree answers it
 * without a backend. The decision table is just the shared variant list -
 * swapping a real model in later means replacing `pick()`, not this component.
 *
 * Lives outside `.overflow-container` (alongside the markers rail) so the
 * section clipping never catches it.
 */

const ANSWERS = VARIANTS.map((v) => ({
  key: v.key,
  choice: v.use,
  name: v.name,
  process: v.process,
  body: v.recommendation,
  href: `/products/${v.key}`,
}));

/** The whole "model". Rules in, variant out. */
function pick(key) {
  return ANSWERS.find((a) => a.key === key) ?? null;
}

/** Open between 9am and 11pm, per the plan's Oil Bot strategy. */
function isOnDuty(now = new Date()) {
  const h = now.getHours();
  return h >= 9 && h < 23;
}

export default function OilBot() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [onDuty, setOnDuty] = useState(() => isOnDuty());
  const panelRef = useRef(null);
  const launcherRef = useRef(null);

  // Re-check on the minute rather than once at mount: a session can straddle
  // 11pm, and a stale "online" dot is worse than no dot.
  useEffect(() => {
    const id = setInterval(() => setOnDuty(isOnDuty()), 60_000);
    return () => clearInterval(id);
  }, []);

  // Links that still point at the old /oil-bot route open the panel instead of
  // navigating; see the delegation in App.jsx.
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("actipro:open-oilbot", onOpen);
    return () => window.removeEventListener("actipro:open-oilbot", onOpen);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    launcherRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
    };

    const onPointerDown = (e) => {
      if (panelRef.current?.contains(e.target)) return;
      if (launcherRef.current?.contains(e.target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, close]);

  return (
    <div className="oilbot" data-oilbot-open={open ? "true" : "false"}>
      <div
        className="oilbot-panel"
        ref={panelRef}
        role="dialog"
        aria-label="Oil Bot"
        aria-hidden={open ? "false" : "true"}
        inert={!open}
      >
        <div className="oilbot-panel__top">
          <span className="oilbot-panel__title">
            <span className="oilbot-dot" data-on-duty={onDuty ? "true" : "false"} aria-hidden="true"></span>
            Oil Bot
          </span>

          <button type="button" className="oilbot-close" onClick={close} aria-label="Close Oil Bot">
            <svg width="1.2rem" height="1.2rem" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="oilbot-panel__body">
          {answer === null ? (
            <>
              <p className="oilbot-bubble">
                Not all cooking calls for the same oil. Tell me what you cook most and I'll point you to the right
                variant.
              </p>

              <ul className="oilbot-choices">
                {ANSWERS.map((a) => (
                  <li key={a.key}>
                    <button type="button" className="oilbot-choice" onClick={() => setAnswer(pick(a.key))}>
                      {a.choice}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p className="oilbot-bubble">
                Then it's <strong>{answer.name}</strong>.
              </p>

              <div className="oilbot-result">
                <span className="oilbot-result__process">{answer.process}</span>
                <p className="oilbot-result__body">{answer.body}</p>
              </div>

              <div className="oilbot-actions">
                <Link to={answer.href} className="oilbot-action is--primary" onClick={close}>
                  See the product
                </Link>
                <button type="button" className="oilbot-action" onClick={() => setAnswer(null)}>
                  Ask again
                </button>
              </div>
            </>
          )}
        </div>

        <div className="oilbot-panel__foot">
          {onDuty ? "Answering now · 9am to 11pm" : "Off duty · back at 9am"}
          <Link to="/find-your-oil" className="oilbot-foot__link" onClick={close}>
            Compare all three
          </Link>
        </div>
      </div>

      <button
        type="button"
        className="oilbot-launcher"
        ref={launcherRef}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close Oil Bot" : "Open Oil Bot"}
      >
        <span className="oilbot-launcher__icon" aria-hidden="true">
          <svg width="100%" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2.5c3.2 3.4 5.5 6.3 5.5 9.2a5.5 5.5 0 1 1-11 0c0-2.9 2.3-5.8 5.5-9.2Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
          </svg>
        </span>
        <span className="oilbot-launcher__text">Oil Bot</span>
        <span className="oilbot-dot" data-on-duty={onDuty ? "true" : "false"} aria-hidden="true"></span>
      </button>
    </div>
  );
}
