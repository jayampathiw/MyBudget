class UserComponent extends HTMLElement {
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
            width: 200px;
            height: 200px;
          }

        </style>
        <div class="card">
          <img src="${this.getAttribute("picture")}" height="50" width="50" />
          <div>
            <h5>${this.getAttribute("firstName")} ${this.getAttribute("lastName")}</h5>
            <p>Age : ${this.getAttribute("age")}</p>
            <p>Phone : ${this.getAttribute("phone")}</p>
            <p>Address : ${this.getAttribute("address")}</p>
            <p>Category : ${this.getAttribute("category")}</p>
          </div>
        </div>`;
  }
}

customElements.define('user-component', UserComponent);