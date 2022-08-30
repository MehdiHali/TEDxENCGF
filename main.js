import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import gsap from 'gsap'

let tl = new gsap.timeline();


tl.fromTo("#ideas", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut"})
.fromTo("#worth", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut" },'-=0.9')
.fromTo("#spreading", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut"},"-=0.85");