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
  }
  window.customElements.define('html-component-name', TipSelector);
}
