function wcGetAttr(el,attr,def){
return  el.hasAttribute(attr)?el.getAttribute(attr):def
}

 class wcCard extends HTMLElement {
constructor(){
    super();
    this.innerHTML = `
            <li style="background-color: black; " class=" relative h-full sm:h-72 sm:w-52 w-full ">
            <!--
              <picture>
                <source type="image/webp" srcset="${this.hasAttribute("src")?this.getAttribute('src').split(".")[0]+".webp":"/assets/team/person.svg"}" >
                <source type="image/jpeg"  srcset="${this.hasAttribute("src")?this.getAttribute('src'):"/assets/team/person.svg"}">
              <img   style="height: 80%;" class=" w-full object-cover " src="${this.hasAttribute("src")?this.getAttribute('src'):"/assets/team/person.svg"}" alt="${wcGetAttr(this,"src","team member image").split('/')[3]}}">
              </picture>
              -->
              <img role="img"   style="height: 80%;" class=" w-full object-cover " src="${this.hasAttribute("src")?this.getAttribute('src'):"/assets/team/person.svg"}" alt="${wcGetAttr(this,"src","team member image").split('/')[3]}}">
              <div style="bottom: 0;  " class="absolute bottom-0 left-0  w-full ">
                    <p style="padding-bottom: 0px; height: 4rem; background-color:rgba(0, 0, 0, 0.3);" class=" text-white  inter-black text-lg px-2" > ${wcGetAttr(this,"lastName","Last Name")} <br> ${this.hasAttribute('firstName')?this.getAttribute("firstName"):"First Name"} </p>
                    <div  style="background-color: black; width: 100%; padding-right: 3rem;padding-top: 0; height: 4rem" class="w-full p-2">
                    <p style="border-top: 1px #ff0000 solid;" class="text-white w-full bg-black ">${wcGetAttr(this,"role","Role")}</p>
                    </div>
              </div>

            </li>
    `
}
}

customElements.define("wc-card",wcCard)