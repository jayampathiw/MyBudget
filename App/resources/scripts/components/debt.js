class DebtComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.generateDebtTemplate();
  }


  generateDebtTemplate() {
    return `
        <style>
            h5{
                margin: 0;
                padding:0;
                font-size:20px;
                font-weight: 100;
            }
            
            .card{
                margin: 10px 0;
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 3px;
                width: 80%;
                padding: 5px 10px;
            }

            .card-details{
                margin: 0 20px;
                font-size: 13px;
            }
        </style>
        <div class="card flex-row">
            <div class="card-details">
            <h5>${this.getAttribute("description")}</h5>
            <p><span>Balance : ${this.getAttribute("balance")}</span></p>
            <p><span>Payment : ${this.getAttribute("payment")}</span></p>
            <p><span>Category : ${this.getAttribute("category")}</span></p>
            <p><span>Bank : ${this.getAttribute("bank")}</span></p>
            </div>
        </div>`;
  }
}

customElements.define('debt-component', DebtComponent);