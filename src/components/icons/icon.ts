import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('emulsify-icon')
export class Icon extends LitElement {
  @property({ type: String }) name = '';

  static styles = css`
    .icon {
      width: 100%;
      height: 100%;
    }
  `;

  render() {
    return html`
      <svg class="icon">
        <use href="/src/assets/sprite.svg#${this.name}"></use>
      </svg>
    `;
  }
}
