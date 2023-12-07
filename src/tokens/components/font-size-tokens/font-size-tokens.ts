import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tokenSharedStyles from '../tokens-shared/styles';
import { type TokensType } from '../tokens-shared/types';

@customElement('font-size-tokens')
export class FontSizeTokens extends LitElement {
  @property()
  tokens: TokensType = {};

  static styles = [tokenSharedStyles];

  override render() {
    const items = Object.entries(this.tokens).map(
      ([token, data]) => html`
        <li class="sb-list__item">
          <span class="sb-list__label">${token}</span>
          <span class="sb-list__value">${data.value}px</span>
          <span class="sb-list__custom-property">
            <code class=" sb-custom-property-name"
              >var(--font-size-${token})</code
            >
          </span>

          <p style="font-size: var(--font-size-${token}); margin: 0;">
            ${token.toUpperCase()}
          </p>
        </li>
      `,
    );

    return html`
      <div>
        <h2 class="sb-title">Font Size Tokens</h2>
        <ul class="sb-list">
          ${items.reverse()}
        </ul>
      </div>
    `;
  }
}
