import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { CustomEase } from "gsap/CustomEase";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// The reference also registered TextPlugin and SplitText; nothing on this page
// uses them, so they are left out rather than shipped.
gsap.registerPlugin(CustomEase, ScrollTrigger, Draggable, InertiaPlugin, Flip, MorphSVGPlugin);

CustomEase.create("EA-ease", "0.6, 0.08, 0.02, 0.99");
CustomEase.create("EA-loader", "0.65, 0.01, 0.05, 0.99");

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger, Draggable, Flip, InertiaPlugin, CustomEase, MorphSVGPlugin };
