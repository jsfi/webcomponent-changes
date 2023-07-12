import { html } from "lit";
import { SprdHTMLElement } from "./SprdHtmlElement";

const TAG_NAME = "num-component";

export class NumComponent extends SprdHTMLElement {
  private num = 2;

  static properties = {
    num: { state: true }
  };

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(TAG_NAME);
  }

  render() {
    return html`
      <p class="num-component__text">Hello from my-component: ${this.num}</p>
      <mul2-component .num=${this.num}></mul2-component>
      <num-control
        .num=${this.num}
        .setNum=${(newNum: number) => (this.num = newNum)}
      ></control>
    `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, NumComponent);
}
