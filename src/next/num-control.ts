import { html } from "lit";
import { SprdHTMLElement } from "./SprdHtmlElement";

const TAG_NAME = "num-control";

export class Control extends SprdHTMLElement {
  private num: number;
  private setNum: (num: number) => void;

  static properties = {
    number: { type: Number },
    setNum: {}
  };

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(TAG_NAME);
  }

  render() {
    return html`
      <p>
        <button type="button" @click=${() => this.setNum(this.num + 1)}>
          Inc
        </button>
        <button type="button" @click=${() => this.setNum(this.num - 1)}>
          Del
        </button>
        <button type="button" @click=${() => this.setNum(10)}>10</button>
      </p>
    `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, Control);
}
