import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tokenSharedStyles from '../tokens-shared/styles';
import { type TokensType } from '../tokens-shared/types';

@customElement('border-radius-tokens')
export class BorderRadiusTokens extends LitElement {
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
            <code class="sb-custom-property-name">var(--radius-${token})</code>
          </span>
          <span
            class="sb-list__visualization"
            style="border-radius: var(--radius-${token}); width: 75px; height: 75px; background: var(--colors-sb-visualization);"
          ></span>
        </li>
      `,
    );

    return html`
      <div>
        <h2 class="sb-title">Border Radius Tokens</h2>
        <ul class="sb-list">
          ${items}
        </ul>
      </div>
    `;
  }
}
