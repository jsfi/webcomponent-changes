import { html, render } from "lit";
import { NumComponent } from "./current-num-component";
import { SprdHTMLElement } from "./SprdHtmlElement";

class Mul2Component extends SprdHTMLElement {
  private numComponent: NumComponent;

  connectedCallback() {
    super.connectedCallback();
    this.classList.add(this.block);
    this.numComponent = document.querySelector("current-num-component");
    this.numComponent.addEventListener("update-num", () => this.render());
    this.render();
  }

  render() {
    if (this.loaded) {
      render(
        html`<p>
          Hello from current-mul2-component: ${this.numComponent.num * 2}
        </p>`,
        this
      );
    }
  }

  static get tag() {
    return "current-mul2-component";
  }
}

if (!customElements.get(Mul2Component.tag)) {
  customElements.define(Mul2Component.tag, Mul2Component);
}
