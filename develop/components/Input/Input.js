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
    }

    // VARIABLES

    // METHODS
  }
  window.customElements.define('html-component-name', Input);
}
