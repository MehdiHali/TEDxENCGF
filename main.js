import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'


let tl = new gsap.timeline();

gsap.registerPlugin(ScrollTrigger)

tl.fromTo("#ideas", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut"})
.fromTo("#worth", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut" },'-=0.9')
.fromTo("#spreading", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut"},"-=0.85");

// let tl2 = gsap.timeline({scrollTrigger: {
//     markers: true,
//     trigger: "#section-1",
//     pin: true,
//     start: "top top",
//     scrub: 1,
// snap: {
//         snapTo: "labels", // snap to the closest label in the timeline
//         duration: {min: 0.2, max: 0.5}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//         delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//         ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
//       }
//     }
// });


// tl2.addLabel("start")
// .to('#right-box-1',{
//     y: -window.innerHeight,
//     duration: 1,
//     ease: "power2.out"})
// .addLabel("mid")
// .to('#right-box-3',{
//     y: -window.innerHeight,
//     duration: 1,
//     ease: "power2.out"})
// .addLabel("end")
// .to('#right-box-3',{
//     y: -window.innerHeight,
//     duration: 1,
//     ease: "power2.out"})


// ============

