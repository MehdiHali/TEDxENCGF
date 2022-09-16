import gsap from "gsap";
class wcHeader extends HTMLElement {
constructor(){
    super();
    this.innerHTML = `
          <header id="site_header" style="height: 15%;" class="flex  z-50 items-center justify-between  ${this.getAttribute("inside-class")} ">
            <a class="z-10" href="/">

            <img class="w-44 h-fit py-4 px-4 lg:px-0 z-10" alt="logo" src="/assets/LOGO.webp">
            </a>
            <nav id="header_nav" class="hidden list-none space-x-12  lg:flex z-10">
              <a class=" ${window.location.pathname === '/' && "active-link"} hover-text-ted-red hover:scale-110" href="/">Home <hr  class=" absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
              <a class=" ${window.location.pathname === '/edition.html' && "active-link"} hover-text-ted-red hover:scale-110" href="edition.html">Edition  <hr  class="absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
              <a class=" ${window.location.pathname === '/partners.html' && "active-link"} hover-text-ted-red  hover:scale-110" href="/partners.html">Partners  <hr  class="absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
              <a class=" ${window.location.pathname === '/team.html' && "active-link"} hover-text-ted-red  hover:scale-110" href="/team.html">Team  <hr  class="absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
              <a class=" ${window.location.pathname === '/about.html' && "active-link"} hover-text-ted-red  hover:scale-110" href="/about.html">About  <hr  class="absolute bottom-0 left-0 right-0 hidden border-0 border-b-2 border-ted-red origin-center   mx-auto"></a>
            </nav>
            <div class="hover-ted-text flex items-center space-x-4 w-32 justify-end">
              <a class="${window.location.pathname === '/contact.html' && "active-link"} hover-text-ted-red z-10  hover:scale-110 text-right" href="/contact.html">Contact </a>
              <ul id="drop_menu" class="hidden flex flex-col items-center justify-center  bg-white fixed w-screen h-screen top-0 -left-4  z-50 m-0">

                <button id="drop_menu_close_btn" class="absolute top-0 right-2 text-4xl p-4">
                <img class="w-8" src="/assets/BIG_X.svg">
                    </button>
                    <img class="w-40 h-fit mb-10" src="/assets/LOGO.webp" alt="">

                    <a class="${location.pathname==='/' && "bg-ted-red text-white "} hover:text-white hover:bg-ted-red  w-full p-4 text-center " href="/"> <li >Home</li></a>
                    <a class="${location.pathname==='/edition.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center " href="/edition.html"><li >Edition</li></a>
                    <a class="${location.pathname==='/partners.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center " href="/partners.html"><li >Partners</li> </a>
                    <a class="${location.pathname==='/team.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center " href="/team.html"><li >Team</li></a>
                    <a class="${location.pathname==='/about.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center " href="/about.html"><li >About</li></a>

              </ul>
              <img id="drop_menu_btn" class="cursor-pointer lg:hidden z-10 w-10 h-10" alt="menu button" src="./assets/icons/menu_FILL0_wght400_GRAD0_opsz48.svg">
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
})


drop_menu_close_btn.addEventListener("click",()=>{
  drop_menu.classList.add("hidden")
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