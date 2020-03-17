"use strict";
/* import { gsap } from "gsap"; */
import { gsap } from "gsap/dist/gsap";
const h1 = document.querySelector("h1");
const ball = document.querySelector(".ball");

gsap.to(h1.current, { color: "#fff", duration: 2 });
