function wcGetAttr(el,attr,def){
return  el.hasAttribute(attr)?el.getAttribute(attr):def
}

 class wcCard extends HTMLElement {
constructor(){
    super();
    this.innerHTML = `
            <li style="background-color: black; " class=" relative h-60 sm:h-72 w-36 sm:w-48 2xl:w-60 2xl:h-96 rounded-xl">
            <!--
              <picture>
                <source type="image/webp" srcset="${this.hasAttribute("src")?this.getAttribute('src').split(".")[0]+".webp":"/assets/team/person.svg"}" >
                <source type="image/jpeg"  srcset="${this.hasAttribute("src")?this.getAttribute('src'):"/assets/team/person.svg"}">
              <img   style="height: 80%;" class=" w-full object-cover  " src="${this.hasAttribute("src")?this.getAttribute('src'):"/assets/team/person.svg"}" alt="${wcGetAttr(this,"src","team member image").split('/')[3]}}">
              </picture>
              -->
              <img role="img"   style="height: 80%;" class=" w-full object-cover " src="${this.hasAttribute("src")?this.getAttribute('src'):"/assets/team/person.svg"}" alt="${wcGetAttr(this,"src","team member image").split('/')[3]}}">
              <div style="bottom: 0;  " class="absolute bottom-0 left-0  w-full ">
                    <p style="padding-bottom: 0px; height: 3rem; background-color:rgba(0, 0, 0, 0.3);" class=" text-white  inter-black text-xs sm:text-md px-2 pt-2" > ${wcGetAttr(this,"lastName","Last Name")} <br> ${this.hasAttribute('firstName')?this.getAttribute("firstName"):"First Name"} </p>
                    <div  style="background-color: black; width: 100%; padding-right: 1rem;padding-top: 0; height: 3.5rem" class="w-full p-2">
                    <p style="border-top: 1px #ff0000 solid;" class="text-white w-full bg-black text-xs sm:text-md pt-2 ">${wcGetAttr(this,"role","Role")}</p>
                    </div>
              </div>

            </li>
    `
}
}

customElements.define("wc-card-2",wcCard)