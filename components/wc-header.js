import gsap from "gsap";
class wcHeader extends HTMLElement {
constructor(){
    super();
    this.innerHTML = `
          <header style="height: 15%;" class="flex items-center justify-between z-10 ${this.getAttribute("class")}">
            <a class="z-10" href="/">

            <img class="w-44 h-fit py-4 px-4 lg:px-0 z-10" alt="logo" src="/assets/LOGO.webp">
            </a>
            <nav class="hidden list-none space-x-12  lg:flex z-10">
              <a class=" ${window.location.pathname === '/' && "active-link"} hover-text-ted-red hover:scale-110" href="/">Home</a>
              <a class=" ${window.location.pathname === '/edition.html' && "active-link"} hover-text-ted-red hover:scale-110" href="edition.html">Edition</a>
              <a class=" ${window.location.pathname === '/partners.html' && "active-link"} hover-text-ted-red  hover:scale-110" href="/partners.html">Partners</a>
              <a class=" ${window.location.pathname === '/team.html' && "active-link"} hover-text-ted-red  hover:scale-110" href="/team.html">Team</a>
              <a class=" ${window.location.pathname === '/about.html' && "active-link"} hover-text-ted-red  hover:scale-110" href="/about.html">About</a>
            </nav>
            <div class="hover-ted-text flex items-center space-x-4">
              <a class="${window.location.pathname === '/contact.html' && "active-link"} hover-text-ted-red z-10  hover:scale-110" href="/contact.html">Contact</a>
              <ul id="drop_menu" class="hidden flex flex-col items-center justify-center  bg-white fixed w-screen h-screen top-0 -left-4  z-50 m-0">

                <button id="drop_menu_close_btn" class="absolute top-0 right-2 text-4xl p-4">
                <img class="w-10" src="/assets/BIG X.svg">
                    </button>
                    <img class="w-40 h-fit mb-10" src="/assets/LOGO.webp" alt="">

                    <a class="${location.pathname==='/' && "bg-ted-red text-white "} hover:text-white hover:bg-ted-red  w-full p-4 text-center " href="/"> <li >Home</li></a>
                    <a class="${location.pathname==='/edition.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center " href="/edition"><li >Edition</li></a>
                    <a class="${location.pathname==='/partners.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center " href="/partners.html"><li >Partners</li> </a>
                    <a class="${location.pathname==='/team.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center " href="/team.html"><li >Team</li></a>
                    <a class="${location.pathname==='/about.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center " href="/about.html"><li >About</li></a>

              </ul>
              <img id="drop_menu_btn" class="cursor-pointer lg:hidden z-10 w-fit h-fit " alt="menu button" src="./assets/icons/menu_FILL0_wght400_GRAD0_opsz48.svg">
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


