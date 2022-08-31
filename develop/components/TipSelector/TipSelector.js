fetch('./develop/components/TipSelector/TipSelector.html')
  .then((stream) => stream.text())
  .then((text) => {
    define(text);
  });

function define(html) {
  class TipSelector extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = html;
    }

    // VARIABLES

    // METHODS

    // LIFE CYCLE METHODS
    connectedCallback() {
      const form = this.shadowRoot.children[2];
      const fieldSet = this.shadowRoot.children[2].children[0];
      const radioInput5Percent =
        this.shadowRoot.children[2].children[0].children[1].children[0];
      const radioInput10Percent =
        this.shadowRoot.children[2].children[0].children[2].children[0];
      const radioInput15Percent =
        this.shadowRoot.children[2].children[0].children[3].children[0];
      const radioInput20Percent =
        this.shadowRoot.children[2].children[0].children[4].children[0];
      const radioInput50Percent =
        this.shadowRoot.children[2].children[0].children[5].children[0];
      const customInput =
        this.shadowRoot.children[2].children[0].children[6].children[0];

      let chosenTip;

      const newEvent = new CustomEvent('sendTip', {
        bubbles: true,
        composed: true,
        detail: {
          tip: () => chosenTip,
        },
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (customInput.value !== '') {
          chosenTip = customInput.value;
          console.log('1');
        } else if (radioInput5Percent.checked) {
          console.log('2');
          chosenTip = radioInput5Percent.id;
        } else if (radioInput10Percent.checked) {
          console.log('3');
          chosenTip = radioInput10Percent.id;
        } else if (radioInput15Percent.checked) {
          console.log('4');
          chosenTip = radioInput15Percent.id;
        } else if (radioInput20Percent.checked) {
          console.log('5');
          chosenTip = radioInput20Percent.id;
        } else if (radioInput50Percent.checked) {
          console.log('6');
          chosenTip = radioInput50Percent.id;
        }

        this.dispatchEvent(newEvent);
      });
    }
  }
  window.customElements.define('tip-selector-component', TipSelector);
}
