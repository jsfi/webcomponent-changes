import { LitElement } from "lit";

export abstract class SprdHTMLElement extends LitElement {
  protected createRenderRoot() {
    return this;
  }
}
