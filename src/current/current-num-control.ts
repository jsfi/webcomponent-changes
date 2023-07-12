import { html, render } from "lit";
import { NumComponent } from "./current-num-component";
import { SprdHTMLElement } from "./SprdHtmlElement";

export class NumControl extends SprdHTMLElement {
  private numComponent: NumComponent;

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(this.block);
    this.numComponent = document.querySelector("current-num-component");
    this.render();
  }

  get num() {
    return this.numComponent.num;
  }

  setNum(num: number) {
    this.numComponent.num = num;
  }

  render() {
    if (this.loaded) {
      render(
        html`<p>
          <button type="button" @click=${() => this.setNum(this.num + 1)}>
            Inc
          </button>
          <button type="button" @click=${() => this.setNum(this.num - 1)}>
            Del
          </button>
          <button type="button" @click=${() => this.setNum(10)}>10</button>
        </p>`,
        this
      );
    }
  }

  static get tag() {
    return "current-num-control";
  }
}

if (!customElements.get(NumControl.tag)) {
  customElements.define(NumControl.tag, NumControl);
}
