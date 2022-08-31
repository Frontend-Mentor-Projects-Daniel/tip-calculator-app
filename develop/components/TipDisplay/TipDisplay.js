fetch('./develop/components/TipDisplay/TipDisplay.html')
  .then((stream) => stream.text())
  .then((text) => {
    define(text);
  });

function define(html) {
  class TipDisplay extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = html;

      // const tipDisplayComponent = this.shadowRoot.host;
    }

    // VARIABLES

    // METHODS

    static get observedAttributes() {
      return ['total-amount', 'tip-amount', 'bill-amount'];
    }

    // LIFE CYCLE METHODS
    attributeChangedCallback(name, oldValue, newValue) {
      // const tip =
      //   this.shadowRoot.children[2].children[0].children[0].children[1];
      // const total =
      //   this.shadowRoot.children[2].children[0].children[1].children[1];
      // if (name == 'tip-amount') tip.textContent = `$${newValue}`;
      // if (name == 'total-amount') total.textContent = `$${newValue}`;
    }
  }
  window.customElements.define('tip-display-component', TipDisplay);
}
