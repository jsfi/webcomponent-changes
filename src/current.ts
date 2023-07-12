import { html, render } from "lit";

abstract class SprdHTMLElement extends HTMLElement {
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

class NumComponent extends SprdHTMLElement {
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
    if (this.loaded) {
      render(
        html`<p class="${this.block}__text">
            Hello from current-num-component: ${this._num}
          </p>
          <current-mul2-component></current-mul2-component>
          <current-num-control></current-num-control>`,
        this
      );
    }
  }

  static get tag() {
    return "current-num-component";
  }
}

if (!customElements.get(NumComponent.tag)) {
  customElements.define(NumComponent.tag, NumComponent);
}

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

class NumControl extends SprdHTMLElement {
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

  setNum(num) {
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
