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
      return ['people-amount', 'tip-amount', 'bill-amount'];
    }

    // LIFE CYCLE METHODS
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue === newValue) {
        return;
      }

      const tipPerPerson =
        this.shadowRoot.children[2].children[0].children[0].children[1];
      const billPerPerson =
        this.shadowRoot.children[2].children[0].children[1].children[1];

      let bill = this.getAttribute('bill-amount');
      let tip = this.getAttribute('tip-amount') / 100;
      let people = this.getAttribute('people-amount');

      console.log(tip);
      // calculate price paid per person
      if (bill != 0 && tip != 0 && people != 0) {
        // total tip
        let totalTip = Number(`${bill * tip}`);

        // total bill
        let totalBill = Number(`${bill * (1 + tip)}`);

        // tip per person
        tipPerPerson.textContent = `$${(totalTip / people).toFixed(2)}`;

        // bill per person
        billPerPerson.textContent = `$${(totalBill / people).toFixed(2)}`;
      }
    }
  }
  window.customElements.define('tip-display-component', TipDisplay);
}
