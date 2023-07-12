export abstract class SprdHTMLElement extends HTMLElement {
  protected block = this.tagName.toLowerCase().substr(8);
  public loaded: boolean = false;

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {
    this.loaded = true;
    this.dispatchEvent(new CustomEvent("ref", { detail: this }));
  }

  disconnectedCallback() {
    this.loaded = false;
    this.dispatchEvent(new CustomEvent("unref", { detail: this }));
  }

  abstract render();
}
