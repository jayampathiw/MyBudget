class DebtComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
        <style>
          .card {
            display: flex;
            justify-content: space-around;
            border: 2px solid;
            border-radius: 5px;
            margin: 10px;
            padding: 20px;
          }

        </style>
        <div class="card">
          <div>
            <h5>${this.getAttribute("description")}</h5>
            <p>balance : ${this.getAttribute("balance")}</p>
            <p>Payment : ${this.getAttribute("payment")}</p>
            <p>Category : ${this.getAttribute("category")}</p>
            <p>Bank : ${this.getAttribute("bank")}</p>
          </div>
        </div>`;
    }
  }
  
  customElements.define('debt-component', DebtComponent);