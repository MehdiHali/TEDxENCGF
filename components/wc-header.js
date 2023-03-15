import gsap from "gsap";
class wcHeader extends HTMLElement {
constructor(){
    super();
    this.innerHTML = `
          <header id="site_header" style="height: 15%;" class="2xl:text-2xl flex  z-50 items-center justify-between sticky top-0 xl:px-32 ${this.getAttribute("inside-class")} ">
            <a class="z-10" href="/">
                <img class="w-44 md:w-60 2xl:w-60 lg:w-40 py-4 px-4 lg:px-0 z-10" alt="logo" src="/assets/LOGO.webp">
            </a>
            <nav id="header_nav" class="hidden list-none space-x-12  lg:flex z-10">
              <a class=" ${window.location.pathname === '/' && "active-link"} hover-text-ted-red hover:scale-110" href="/">Home <hr  class=" absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
              <a class=" ${window.location.pathname === '/edition.html' && "active-link"} hover-text-ted-red hover:scale-110" href="edition.html">2023's Edition  <hr  class="absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
              <a class=" ${window.location.pathname === '/partners.html' && "active-link"} hover-text-ted-red  hover:scale-110" href="/partners.html">Partners  <hr  class="absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
              <a class=" ${window.location.pathname === '/team.html' && "active-link"} hover-text-ted-red  hover:scale-110" href="/team.html">Team  <hr  class="absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
              <a class=" ${window.location.pathname === '/about.html' && "active-link"} hover-text-ted-red  hover:scale-110" href="/about.html">About  <hr  class="absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
            </nav>
            <div class="hover-ted-text flex items-center space-x-4 justify-end">
              <ul id="drop_menu" class="hidden flex flex-col items-center justify-center  bg-white fixed w-3/5 h-screen top-0   z-50 m-0">

                    <img class="w-40 md:w-72  mb-10" src="/assets/LOGO.webp" alt="">

                    <a class="${location.pathname==='/' && "bg-ted-red text-white "} hover:text-white hover:bg-ted-red  w-full p-4 text-center md:text-4xl  border-b-2" href="/"> <li >Home</li></a>
                    <a class="${location.pathname==='/edition.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center md:text-4xl border-b-2" href="/edition.html"><li >Edition</li></a>
                    <a class="${location.pathname==='/partners.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center md:text-4xl  border-b-2" href="/partners.html"><li >Partners</li> </a>
                    <a class="${location.pathname==='/team.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center md:text-4xl  border-b-2" href="/team.html"><li >Team</li></a>
                    <a class="${location.pathname==='/about.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center md:text-4xl  border-b-2" href="/about.html"><li >About</li></a>
              </ul>
              <a class="${window.location.pathname === '/contact.html' && "active-link"} hover-text-ted-red z-50  2xl:text-2xl hover:scale-110 text-right md:text-xl lg:text-base" href="/contact.html">Contact </a>

                <button id="drop_menu_btn" class=" text-4xl  drop-shadow-md z-50">
              <img id="close_menu_btn" class="hidden cursor-pointer lg:hidden w-10 md:w-20 md:h-20 h-10 z-50" alt="menu button" src="/assets/icons/close_btn.svg">
              <img id="open_menu_btn" class=" cursor-pointer lg:hidden w-10 md:w-20 md:h-20 h-10 " alt="menu button" src="./assets/icons/menu_FILL0_wght400_GRAD0_opsz48.svg">
                    </button>
            </div>
          </header>
    `
}
}

customElements.define("wc-header",wcHeader)

window.localStorage.setItem("menu_is_open",false);

let drop_menu_btn = document.getElementById("drop_menu_btn"),
drop_menu = document.getElementById("drop_menu"),
open_menu_btn = document.getElementById("open_menu_btn"),
close_menu_btn = document.getElementById("close_menu_btn");

function toggleMenu(){
  localStorage.setItem("menu_is_open",!(localStorage.getItem("menu_is_open")==="true"))
  // console.log(localStorage.getItem("menu_is_open")==="true")
  return localStorage.getItem("menu_is_open") === "true"
}

drop_menu_btn.addEventListener("click",()=>{
  let menu_is_open = toggleMenu()
  // console.log("menu is open", menu_is_open);
  drop_menu.classList.remove("hidden")
  open_menu_btn.classList.toggle("hidden")
  close_menu_btn.classList.toggle("hidden")
  gsap.fromTo(open_menu_btn,{x: -10},{x: 0, duration: 1, ease: "power2.inOut"})
  gsap.fromTo(close_menu_btn,{rotate: 90},{rotate: 0, duration: 1, ease: "power2.inOut"})
  menu_is_open 
  ? gsap.fromTo("#drop_menu",{x:200,autoAlpha:0},{x:0,autoAlpha:1,duration: 1, ease: "power2.inOut"})
  : gsap.to("#drop_menu",{x:200,autoAlpha: 0, duration:1 , ease:"power2.inOut"})
})


// drop_menu_close_btn.addEventListener("click",()=>{
//   gsap.to("#drop_menu",{x:200,autoAlpha: 0, duration:1 , ease:"power2.inOut"})
//   // drop_menu.classList.add("hidden")
// })


let header_nav_links = document.querySelectorAll("#header_nav a")
header_nav_links.forEach(link => {
  console.log(link)
    let hr = link.lastChild
    
  link.addEventListener("mouseenter",()=>{
    hr.classList.remove("hidden")
    console.log("Hover"); 
    console.log(hr)
    gsap.fromTo(hr,{width: 0}, {width: "90%", duration: 0.5, ease: "Power2.inOut"})
  })
  link.addEventListener("mouseleave",()=>{
    hr.classList.add("hidden")
  })
})



window.addEventListener("scroll", ()=>{
    if(window.scrollY == 0){
      document.getElementById("site_header").classList.remove("bg-white")
    }
    else{
    document.getElementById("site_header").classList.add("bg-white")
    }
})

