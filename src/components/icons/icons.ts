import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './icon';

@customElement('emulsify-icons')
export class Icons extends LitElement {
  @property({ type: Array }) icons: string[] = [];

  static styles = css`
    .icons {
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      gap: var(--size-2xl);
      margin: var(--size-xl);
    }
    .icons__item {
      display: flex;
      gap: var(--size-md);
      align-items: center;
      flex-direction: column;
    }
    .icons__item__svg {
      width: 5rem;
      height: 5rem;
      color: var(--colors-sb-text-body);
    }
    .icons__item__label {
      font-size: var(--font-size-body);
    }
  `;

  render() {
    return html`
      <ul class="icons">
        ${this.icons.map(
          (icon) => html`
            <li class="icons__item">
              <div class="icons__item__svg">
                <emulsify-icon .name="${icon}"></emulsify-icon>
              </div>
              <span class="icons__item__label">${icon}</span>
            </li>
          `,
        )}
      </ul>
    `;
  }
}
