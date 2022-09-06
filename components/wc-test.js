
class wcTest extends HTMLElement {
constructor(){
   super();
   this.innerHTML = `
   <strong class="bg-red-500 text-4xl">aslkdjsalkfjlfjsajfdsaf<strong>
   `
}
}

customElements.define("wc-test",wcTest)