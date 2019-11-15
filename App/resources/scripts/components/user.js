class UserComponent extends HTMLElement {
  constructor() {
    super();
    console.log(this.getAttribute("firstName"));
    this.innerHTML = `
        <div class="card">
          <h1>Hello world User</h1>
        </div>`;
  }
}

customElements.define('user-component', UserComponent);