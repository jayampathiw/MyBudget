class UserComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.generateUserTemplate();
  }

  generateUserTemplate(){
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
            <img src="${this.getAttribute("picture")}" height="120" width="120" />
            <div class="card-details">
                <h5>${this.getAttribute("firstName")} ${this.getAttribute("lastName")}</h5>
                <p><span>Age : ${this.getAttribute("age")}</span></p>
                <p><span>Phone : ${this.getAttribute("phone")}</span></p>
                <p><span>Address : ${this.getAttribute("address")}</span></p>
                <p><span>Category : ${this.getAttribute("category")}</span></p>
            </div>
        </div>`;
  }
}

customElements.define('user-component', UserComponent);