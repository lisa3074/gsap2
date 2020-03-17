"use strict";
/* import { gsap } from "gsap"; */
import { gsap } from "gsap/dist/gsap";

/* gsap.to(".ball", { x: 400, duration: 2 });
gsap.to(".ball", { rotate: 200, duration: 2 });
gsap.to(".ball", { delay: 2, scale: 1.4, duration: 1 });
gsap.to(".ball", { delay: 3, scale: 0, duration: 1 });
gsap.to(".ball", { delay: 4, scale: 1, rotate: -200, x: 0, duration: 2 }); */

const timeline = gsap.timeline({ repeat: 2, repeatDelay: 0 });

timeline.to(".ball", { x: 400, duration: 2, rotate: 200, duration: 2 });
timeline.to(".ball", { scale: 0, x: 1000, y: -2000, duration: 1 });
