import gsap from "gsap";
class wcHeader extends HTMLElement {
constructor(){
    super();
    this.innerHTML = `
          <header id="site_header" style="height: 15%;" class="2xl:text-2xl flex  z-50 items-center justify-between  ${this.getAttribute("inside-class")} ">
            <a class="z-10" href="/">

            <img class="w-44 md:w-60 2xl:w-60 lg:w-40 h-fit py-4 px-4 lg:px-0 z-10" alt="logo" src="/assets/LOGO.webp">
            </a>
            <nav id="header_nav" class="hidden list-none space-x-12  lg:flex z-10">
              <a class=" ${window.location.pathname === '/' && "active-link"} hover-text-ted-red hover:scale-110" href="/">Home <hr  class=" absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
              <a class=" ${window.location.pathname === '/edition.html' && "active-link"} hover-text-ted-red hover:scale-110" href="edition.html">Edition  <hr  class="absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
              <a class=" ${window.location.pathname === '/partners.html' && "active-link"} hover-text-ted-red  hover:scale-110" href="/partners.html">Partners  <hr  class="absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
              <a class=" ${window.location.pathname === '/team.html' && "active-link"} hover-text-ted-red  hover:scale-110" href="/team.html">Team  <hr  class="absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
              <a class=" ${window.location.pathname === '/about.html' && "active-link"} hover-text-ted-red  hover:scale-110" href="/about.html">About  <hr  class="absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
            </nav>
            <div class="hover-ted-text flex items-center space-x-4 w-32 justify-end">
              <a class="${window.location.pathname === '/contact.html' && "active-link"} hover-text-ted-red z-10  2xl:text-2xl hover:scale-110 text-right md:text-xl lg:text-base" href="/contact.html">Contact </a>
              <ul id="drop_menu" class="hidden flex flex-col items-center justify-center  bg-white fixed w-screen h-screen top-0 -left-4  z-50 m-0">

                <button id="drop_menu_close_btn" class="absolute top-0 right-2 text-4xl p-4">
<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg>
                    </button>
                    <img class="w-40 md:w-72 h-fit mb-10" src="/assets/LOGO.webp" alt="">

                    <a class="${location.pathname==='/' && "bg-ted-red text-white "} hover:text-white hover:bg-ted-red  w-full p-4 text-center md:text-4xl  border-b-2" href="/"> <li >Home</li></a>
                    <a class="${location.pathname==='/edition.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center md:text-4xl border-b-2" href="/edition.html"><li >Edition</li></a>
                    <a class="${location.pathname==='/partners.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center md:text-4xl  border-b-2" href="/partners.html"><li >Partners</li> </a>
                    <a class="${location.pathname==='/team.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center md:text-4xl  border-b-2" href="/team.html"><li >Team</li></a>
                    <a class="${location.pathname==='/about.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center md:text-4xl  border-b-2" href="/about.html"><li >About</li></a>

              </ul>
              <img id="drop_menu_btn" class="cursor-pointer lg:hidden z-10 w-10 md:w-20 md:h-20 h-10" alt="menu button" src="./assets/icons/menu_FILL0_wght400_GRAD0_opsz48.svg">
            </div>
          </header>
    `
}
}

customElements.define("wc-header",wcHeader)


let menu_btn = document.getElementById("drop_menu_btn"),
drop_menu = document.getElementById("drop_menu"),
drop_menu_close_btn = document.getElementById("drop_menu_close_btn");


menu_btn.addEventListener("click",()=>{
  drop_menu.classList.remove("hidden")
  gsap.fromTo("#drop_menu",{x:200,autoAlpha:0},{x:0,autoAlpha:1,duration: 1, ease: "power2.inOut"})
})


drop_menu_close_btn.addEventListener("click",()=>{
  gsap.to("#drop_menu",{x:200,autoAlpha: 0, duration:1 , ease:"power2.inOut"})
  // drop_menu.classList.add("hidden")
})


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

