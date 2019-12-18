/* eslint no-undef: 0 */
export class WCStyleGuide extends HTMLElement {
  static get observedAttributes () {
    return ['stylesheet'];
  }

  get stylesheet () { return this.getAttribute('stylesheet'); }
  set stylesheet (value) {
    this.setAttribute('stylesheet', value);
    this.setStylesheet(value);
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  constructor () {
    super();
    this.__stylesheet = null;
  }

  connectedCallback () {}

  setStylesheet (content) {
    // TODO: implement this
  }
}

customElements.define('wc-style-guide', WCStyleGuide);
