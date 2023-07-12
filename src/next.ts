import { LitElement, html } from "lit";

abstract class SprdHTMLElement extends LitElement {
  protected createRenderRoot() {
    return this;
  }
}

const TAG_NAME = "num-component";

class NumComponent extends SprdHTMLElement {
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

const TAG_NAME_MUL = "mul2-component";

class Mul2Component extends SprdHTMLElement {
  private num: number;

  static properties = {
    num: { type: Number }
  };

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(TAG_NAME_MUL);
  }

  render() {
    return html`<p>Hello from mul2-component: ${this.num * 2}</p>`;
  }
}

if (!customElements.get(TAG_NAME_MUL)) {
  customElements.define(TAG_NAME_MUL, Mul2Component);
}

const TAG_NAME_CONTROL = "num-control";

class Control extends SprdHTMLElement {
  private num: number;
  private setNum: (num: number) => void;

  static properties = {
    number: { type: Number },
    setNum: {}
  };

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(TAG_NAME_CONTROL);
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

if (!customElements.get(TAG_NAME_CONTROL)) {
  customElements.define(TAG_NAME_CONTROL, Control);
}
