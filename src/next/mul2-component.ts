import { html } from "lit";
import { SprdHTMLElement } from "./SprdHtmlElement";

const TAG_NAME = "mul2-component";

export class Mul2Component extends SprdHTMLElement {
  private num: number;

  static properties = {
    num: { type: Number }
  };

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(TAG_NAME);
  }

  render() {
    return html`<p>Hello from mul2-component: ${this.num * 2}</p>`;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, Mul2Component);
}
