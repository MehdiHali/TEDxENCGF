
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
import TextPlugin from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger,TextPlugin,ScrollToPlugin)

let tl = new gsap.timeline();

tl.fromTo("#ideas", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut"})
.fromTo("#worth", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut" },'-=0.9')
.fromTo("#spreading", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 1,ease: "power4.inOut"},"-=0.85")




// ============

let tl3 = new gsap.timeline({
    repeat: -1,

})
tl3.to("#animate-slogan", {duration: 1, text: "Act", ease: "power4.inOut"})
.to("#animate-slogan", {duration: 1, text: "Inspire", ease: "power4.inOut"},"+=0.9")
.to("#animate-slogan", {duration: 1, text: "Educate", ease: "power4.inOut"},"+=0.9");

let scrollBtn = document.getElementById("scroll-btn")
let curr_section = 1;


// scrollBtn.addEventListener('click', ()=>{
//     (curr_section == 5) ? curr_section = 1
//    : curr_section++; 
// gsap.to("#v-viewport", {duration: 1, scrollTo: {y:"#section-"+curr_section},ease:"power2.inOut"});
    

// })



// TEAM PAGE ANIMATIONS
let tl4 = gsap.timeline()
tl4.fromTo(".light-led",{y:0},{y:50,duration:2,ease: "power1.out"})
.fromTo(".light-led",{y:50},{y:0,duration:2,ease: "power1.out"})
.repeat(-1)


let tedxVideo = document.getElementById("tedx-video")
let tedxVideoThumb = document.getElementById("tedx-video-thumbnail")

tedxVideoThumb.addEventListener("click",()=>{
    console.log("play video")
    tedxVideoThumb.classList.add("hidden")
    tedxVideo.classList.remove("hidden")
    tedxVideo.play()
})

