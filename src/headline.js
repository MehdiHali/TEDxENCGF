
import gsap from 'gsap'


document.addEventListener('DOMContentLoaded',()=>{

let team_tl = new gsap.timeline();
let our = document.getElementById("headline_1")
console.log(our)
team_tl.fromTo("#headline_1", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 0.5,ease: "powerr.inOut" })
.fromTo("#headline_2", {y: 100,opacity:0}, {y: 0,opacity:1, duration: 0.5,ease: "powerr.inOut" },'-=0.3')


})