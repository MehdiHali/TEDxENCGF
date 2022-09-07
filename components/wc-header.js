import gsap from "gsap";
class wcHeader extends HTMLElement {
constructor(){
    super();
    this.innerHTML = `
          <header style="height: 15%;" class="flex items-center justify-between z-10 ">
            <a class="z-10" href="/">

            <img class="w-44 py-4 px-4 lg:px-0 z-10" alt="logo" src="/assets/LOGO.png">
            </a>
            <nav class="hidden list-none space-x-12  lg:flex z-10">
              <a class=" ${window.location.pathname === '/' && "active-link"} hover:text-ted-red  border-b-2 hover:border-b-red-500" href="/">Home</a>
              <a class=" ${window.location.pathname === '/edition.html' && "active-link"} hover-text-ted-red border-b-2 hover:border-b-red-500" href="test.html">Edition</a>
              <a class=" ${window.location.pathname === '/partners.html' && "active-link"} hover-text-ted-red  border-b-2 hover:border-b-red-500" href="/partners.html">Partners</a>
              <a class=" ${window.location.pathname === '/team.html' && "active-link"} hover-text-ted-red  border-b-2 hover:border-b-red-500" href="/team.html">Team</a>
              <a class=" ${window.location.pathname === '/about.html' && "active-link"} hover-text-ted-red  border-b-2 hover:border-b-red-500" href="/about.html">About</a>
            </nav>
            <div class="hover-ted-text flex items-center space-x-4">
              <a class="hover-text-ted-red z-10  border-b-2 hover:border-b-red-500" href="#">Contact</a>
              <ul id="drop_menu" class="hidden flex flex-col items-center justify-center  bg-white fixed w-screen h-screen top-0 -left-4  z-50 m-0">

                <button id="drop_menu_close_btn" class="absolute top-0 right-2 text-4xl p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg>
                    </button>
                    <img class="w-40 mb-10" src="/assets/LOGO.png" alt="">

                    <a class="${location.pathname==='/' && "bg-ted-red text-white "} hover:text-white hover:bg-ted-red w-full p-4 text-center " href="/"> <li >Home</li></a>
                    <a class="${location.pathname==='/edition.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center " href="/edition"><li >Edition</li></a>
                    <a class="${location.pathname==='/partners.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center " href="/partners.html"><li >Partners</li> </a>
                    <a class="${location.pathname==='/team.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center " href="/team.html"><li >Team</li></a>
                    <a class="${location.pathname==='/about.html' && "bg-ted-red text-white "} hover:bg-ted-red hover:text-white  w-full p-4 text-center " href="/about.html"><li >About</li></a>

              </ul>
              <img id="drop_menu_btn" class="cursor-pointer lg:hidden z-10 " alt="menu button" src="./assets/icons/menu_FILL0_wght400_GRAD0_opsz48.svg">
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


