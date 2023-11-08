class FullYearElement extends HTMLElement { // (1)

  constructor() {
    super();
  }

  async connectedCallback() {
    if(!this.ariaExpanded){
      this.ariaExpanded = true;
      this.innerHTML = `${new Date().getFullYear()}`;
    }
  }

}

customElements.define("x-fullyear", FullYearElement); // (2)

class CenterElement extends HTMLElement { // (1)

  constructor() {
    super();
  }

  async connectedCallback() {
    if(!this.ariaExpanded){
      this.ariaExpanded = true;
      this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
  }

}

customElements.define("x-center", CenterElement); // (2)