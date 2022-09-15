
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
import TextPlugin from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger,TextPlugin,ScrollToPlugin)


let tl3 = new gsap.timeline({
    repeat: -1,
})
tl3.to("#section1_slogan", {duration: 1, text: "Act", ease: "power4.inOut"})
.to("#section1_slogan", {duration: 1, text: "Inspire", ease: "power4.inOut"},"+=0.9")
.to("#section1_slogan", {duration: 1, text: "Educate", ease: "power4.inOut"},"+=0.9");

// tl.fromTo("#ideas", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut"})
// .fromTo("#worth", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut" },'-=0.9')
// .fromTo("#spreading", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut"},"-=0.85")



let beliefs_tl = new gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#section-2",
      pin: false,   // pin the trigger element while active
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "bottom 130%",
      markers: false,
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }
  });




  let mm = gsap.matchMedia();

  /* MOBILE---------------- */
  mm.add("(max-width: 768px)", ()=>{

beliefs_tl.fromTo("#beliefs_hr",{width: 0},{width: "100%", duration: 1, ease: "power2.out"},"-=0.8")
.fromTo("#beliefs_educate",{x: 100,opacity: 0},{x:0, opacity: 1, duration: 1, ease: "power2.inOut"},"-=0.8")
.fromTo("#beliefs_act",{x: 100,opacity: 0},{x:0, opacity: 1, duration: 1, ease: "power2.inOut"},"-=0.8")
.fromTo("#beliefs_inspire",{x: 100,opacity: 0},{x:0, opacity: 1, duration: 1, ease: "power2.inOut"},"-=0.8")
.fromTo("#beliefs_educate_content",{y: -50, opacity: 0},{y:0, opacity: 1, duration: 1, ease: "power2.out"},"-=0.9")
.fromTo("#beliefs_act_content",{y: -50, opacity: 0},{y:0, opacity: 1, duration: 1, ease: "power2.out"},"-=0.9")
.fromTo("#beliefs_inspire_content",{y: -50, opacity: 0},{y:0, opacity: 1, duration: 1, ease: "power2.out"},"-=0.5")


let section3_tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-3",
    pin: false,
    start: "top bottom",
    end: "top middle",
    markers: false,
    scrub: 1,
  }
})

let section3_childs = document.querySelectorAll("#section-3 > *")
section3_tl.fromTo("#section-3",{y: 0},{y:0, duration: 2, ease:"power3.inOut"},1)
.fromTo(section3_childs[0],{y: 500},{y:0, duration: 2, ease:"power3.inOut"},0)
.fromTo(section3_childs[1],{y: 500},{y:0, duration: 2, ease:"power3.inOut"},0.5)
.fromTo(section3_childs[2],{y: 500},{y:0, duration: 2, ease:"power3.inOut"},0.7)
.fromTo(section3_childs[3],{y: 500},{y:0, duration: 2, ease:"power3.inOut"},0.9)
.fromTo(section3_childs[4],{y: 500},{y:0, duration: 2, ease:"power3.inOut"},1)
.fromTo(section3_childs[5],{y: 500},{y:0, duration: 2, ease:"power3.inOut"},1.1)
.fromTo(section3_childs[6],{y: 500},{y:0, duration: 2, ease:"power3.inOut"},1.2)


let global_tl = gsap.timeline();

global_tl.fromTo("#section1_bigx",{scale:30,rotate: 800,opacity: 0},{scrollTrigger: {
    trigger: "#section-1",
    pin: false,   // pin the trigger element while active
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end: "60% 30%",
    markers: false,
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
},scale:1,rotation: 0,opacity: 1, duration: 1, ease: "power2.inOut"},0)

.add(beliefs_tl)

.fromTo("#what_is_tedx",{opacity: 0, x: -100},{scrollTrigger:{
trigger: "#what_is_tedx",
pin: false,   // pin the trigger element while active
start: "top bottom", // when the top of the trigger hits the top of the viewport
end: "top 40%",
markers: false,
scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
},opacity:1, x:0, duration: 1, ease:"power2.inOut"},"-=0.5")

.add(section3_tl)

  })

  /* BIG SCREENS============ */
  mm.add("(min-width: 768px)", ()=>{

// tl.from("#section1_bigx",{y:200,opacity: 0, duration: 1, ease: "power2.inOut"},0)
// .from("#section1_slogan",{y: 200, duration: 1, ease: "power2.inOut"},"-=1")
// .from("#section1_subtitle",{y: 200, duration: 1, ease: "power2.inOut"},"-=0.9")
// .add(tl3)

let tl = new gsap.timeline();

tl.fromTo("#ideas", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut"})
.fromTo("#worth", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut" },'-=0.9')
.fromTo("#spreading", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut"},"-=0.85")
.from("#section1_bigx",{scale: 500,rotation: 500, duration: 3, ease: "power4.inOut"},0)
.from("#section1_slogan",{y: 200, duration: 1, ease: "power2.inOut"},2)
.from("#section1_subtitle",{y: 200, duration: 1, ease: "power2.inOut"},"-=0.9")
.add(tl3)


beliefs_tl.from("#beliefs_container", {height: 0, duration: 1, ease: "power2.out"})
.from("#beliefs_hr",{width: 0, duration: 1.5, ease: "power2.out"},"-=0.5")
.from("#beliefs_educate",{x: 100, opacity: 0, duration: 1, ease: "power2.inOut"},"-=0.5")
.from("#beliefs_act",{x: 100, opacity: 0, duration: 1, ease: "power2.inOut"},"-=0.5")
.from("#beliefs_inspire",{x: 100, opacity: 0, duration: 1, ease: "power2.inOut"},"-=0.6")
.from("#beliefs_educate_content",{y: -50, opacity: 0, duration: 1, ease: "power2.out"},"-=0.9")
.from("#beliefs_act_content",{y: -50, opacity: 0, duration: 1, ease: "power2.out"},"-=0.9")
.from("#beliefs_inspire_content",{y: -50, opacity: 0, duration: 1, ease: "power2.out"},"-=0.9")
.from("#what_is_tedx",{opacity:0, x: -100, duration: 1, ease:"power2.inOut"},"-=0.5")


let section3_tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-3",
    pin: false,
    start: "-50% bottom",
    end: "top 70%",
    markers: false,
    scrub: 1,
  }
})

let section3_childs = document.querySelectorAll("#section-3 > *")
section3_tl.from("#section-3",{y: 500, duration: 2, ease:"power3.inOut"})
.from(section3_childs[0],{y: 500, duration: 2, ease:"power3.inOut"},0)
.from(section3_childs[1],{y: 500, duration: 2, ease:"power3.inOut"},0.5)
.from(section3_childs[2],{y: 500, duration: 2, ease:"power3.inOut"},0.7)
.from(section3_childs[3],{y: 500, duration: 2, ease:"power3.inOut"},0.9)
.from(section3_childs[4],{y: 500, duration: 2, ease:"power3.inOut"},1)
.from(section3_childs[5],{y: 500, duration: 2, ease:"power3.inOut"},1.1)
.from(section3_childs[6],{y: 500, duration: 2, ease:"power3.inOut"},1.2)


  })


// let scrollBtn = document.getElementById("scroll-btn")
// let curr_section = 1;


// scrollBtn.addEventListener('click', ()=>{
//     (curr_section == 5) ? curr_section = 1
//    : curr_section++; 
// gsap.to("#v-viewport", {duration: 1, scrollTo: {y:"#section-"+curr_section},ease:"power2.inOut"});
    

// })


// section3_childs.forEach(child=>{
//   section3_tl.from(child,{y:500, duration: 1, ease: "power2.inOut"},"-=1.5")
// })
// for (let i = 0; i < section3.; i++) {
//   const element = array[i];
  
// }



let tedxVideo = document.getElementById("tedx-video")
let tedxVideoThumb = document.getElementById("tedx-video-thumbnail")

tedxVideoThumb.addEventListener("click",()=>{
    console.log("play video")
    tedxVideoThumb.classList.add("hidden")
    tedxVideo.classList.remove("hidden")
    tedxVideo.play()
})

