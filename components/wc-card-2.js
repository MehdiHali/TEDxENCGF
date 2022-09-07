

class wcCard2 extends HTMLElement {
    constructor(){
        super();
        this.innerHTML = `
            <li class="flex flex-col items-center">
              <span>${this.getAttribute("name")}</span>
              <img class="w-32 lg:w-40    p-4" src="${this.getAttribute("img")}" alt="${this.getAttribute("name")}">

            </li>
        `
    }
}

customElements.define("wc-card-2",wcCard2);