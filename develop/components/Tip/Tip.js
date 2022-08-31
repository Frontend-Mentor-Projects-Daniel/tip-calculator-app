fetch('./develop/components/Tip/Tip.html')
  .then((stream) => stream.text())
  .then((text) => {
    define(text);
  });

function define(html) {
  class Tip extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = html;
    }

    // VARIABLES

    // METHODS

    // LIFE CYCLE METHODS
    connectedCallback() {
      const inputBill = this.shadowRoot.children[2].children[0].children[0];
      const displayComponent =
        this.shadowRoot.children[2].children[1].children[0];

      this.addEventListener('sendBill', function (e) {
        if (e.detail.bill().id === 'bill') {
          // bill
          displayComponent.setAttribute('bill-amount', e.detail.bill().value);
        }
      });

      this.addEventListener('sendBill', function (e) {
        if (e.detail.bill().id === 'people') {
          // number of people
          displayComponent.setAttribute('total-amount', e.detail.bill().value);
        }
      });

      this.addEventListener('sendTip', function (e) {
        // tip
        displayComponent.setAttribute('tip-amount', e.detail.tip());
      });
    }
  }
  window.customElements.define('tip-component', Tip);
}
