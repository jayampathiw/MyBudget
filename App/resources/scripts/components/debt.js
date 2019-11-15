class DebtComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML =  
      `<div class="card">
        <h1>Hello world Debt</h1>
      </div>`;
    }
  }
  
  customElements.define('debt-component', DebtComponent);