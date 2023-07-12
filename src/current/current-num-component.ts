import { html, render } from "lit";
import { SprdHTMLElement } from "./SprdHtmlElement";

export class NumComponent extends SprdHTMLElement {
  public _num = 2;

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(this.block);
    this.render();
  }

  get num() {
    return this._num;
  }

  set num(num) {
    this._num = num;
    this.dispatchEvent(new CustomEvent("update-num"));
    this.render();
  }

  render() {
    render(
      html`<p class="${this.block}__text">
          Hello from current-num-component: ${this._num}
        </p>
        <current-mul2-component></current-mul2-component>
        <current-num-control></current-num-control>`,
      this
    );
  }

  static get tag() {
    return "current-num-component";
  }
}

if (!customElements.get(NumComponent.tag)) {
  customElements.define(NumComponent.tag, NumComponent);
}
