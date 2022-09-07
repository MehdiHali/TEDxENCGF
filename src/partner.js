import gsap from 'gsap'

let partnerFormBtn = document.getElementById("partner-form-btn")
let partnerForm = document.getElementById("partner-form")
let arrow = document.getElementById("partner-form-arrow")


partnerFormBtn.addEventListener("click", ()=>{
    console.log("click");
    togglePartnerForm()

})

function togglePartnerForm(){

    if(partnerForm.classList.contains("hidden")){
        console.log("hidden")
    partnerForm.classList.remove("hidden")
    gsap.fromTo("#partner-form",{y:-800},{y:0,duration:1,ease:"power3.out"})
    arrow.classList.remove("rotate-180")
    }
    else {
    gsap.to("#partner-form",{y:-800,duration:1,ease:"power2.in"})
    setTimeout(()=>{
    arrow.classList.add("rotate-180")
    partnerForm.classList.add("hidden")
    },800)
    }
}



