fetch('./develop/components/Input/Input.html')
  .then((stream) => stream.text())
  .then((text) => {
    define(text);
  });

function define(html) {
  class Input extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = html;

      const icon =
        this.shadowRoot.children[2].children[0].children[0].children[0];
      const label = this.shadowRoot.children[2].children[0].children[1];
      const input = this.shadowRoot.children[2].children[0].children[2];
      const amount = this.shadowRoot.children[2].children[0].children[3];

      icon.setAttribute('src', this.getAttribute('icon'));
      icon.setAttribute('alt', this.getAttribute('alt'));

      label.setAttribute('for', this.getAttribute('inputId'));
      label.textContent = this.getAttribute('labelText');

      input.id = this.getAttribute('inputId');
      input.name = this.getAttribute('inputId');

      amount.textContent = 1456;
    }

    // VARIABLES

    // METHODS
    // handleSubmit(e, input) {
    //   e.preventDefault();
    //   this.setAttribute('bill', input.value);
    // }

    // LIFE CYCLE METHODS
    connectedCallback() {
      const form = this.shadowRoot.children[2];
      const input = this.shadowRoot.children[2].children[0].children[2];

      const newEvent = new CustomEvent('sendBill', {
        bubbles: true,
        composed: true,
        detail: {
          bill: () => input,
        },
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();

        this.dispatchEvent(newEvent);
      });
    }
  }
  window.customElements.define('input-component', Input);
}
