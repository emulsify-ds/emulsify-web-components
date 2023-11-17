import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('emulsify-button')
export class Loading extends LitElement {
  @property({ type: String }) label = '';
  @property({ type: String }) type: 'submit' | 'reset' | 'button' = 'button';
  @property({ type: String }) name = '';
  @property({ type: Boolean }) isDisabled = false;

  static styles = css`
    .button {
      background-color: var(--button-color-bkg);
      padding: var(--button-padding-y) var(--button-padding-x);
      color: var(--button-color-label);
      border-radius: var(--button-radius);
      border: var(--button-border-width-border) solid var(--button-border-color);
      font-size: var(--font-size-body);
      font-weight: var(--button-font-weight-label);
      text-transform: var(--button-text-case);
      text-decoration: none;
      text-align: center;
      transition: all 0.15s;
      cursor: pointer;

      &:hover {
        background-color: var(--button-color-bkg-hover);
        padding: var(--button-padding-y-hover) var(--button-padding-x-hover);
        border: var(--button-border-width-border-hover) solid
          var(--button-border-color-hover);
        color: var(--button-color-label-hover);
        text-decoration: underline;
        text-transform: var(--button-text-case);
      }

      &:focus {
        background-color: var(--button-color-bkg-focus);
        padding: var(--button-padding-y-focus) var(--button-padding-x-focus);
        color: var(--button-color-label-focus);
        border: var(--button-border-width-border-focus) solid
          var(--button-border-color-focus);
        outline: var(--button-border-width-outline-focus) dotted
          var(--button-border-color-focus);
        text-transform: var(--button-text-case);
        outline-offset: 0.125rem;
      }
    }
  `;

  render() {
    return html`
      <button
        class="button"
        type="${this.type}"
        name="${this.name || nothing}"
        ?disabled=${this.isDisabled}
      >
        ${this.label}
      </button>
    `;
  }
}
