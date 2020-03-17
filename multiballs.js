"use strict";

import { gsap } from "gsap";

gsap.to(".ball", { y: -400, stagger: 0.2, duration: 2, repeat: 3, yoyo: true });
