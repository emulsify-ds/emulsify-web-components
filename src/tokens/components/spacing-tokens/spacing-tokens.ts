import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tokenSharedStyles from '../tokens-shared/styles';
import { type TokensType } from '../tokens-shared/types';

@customElement('spacing-tokens')
export class SpacingTokens extends LitElement {
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
            <code class="sb-custom-property-name">var(--spacing-${token})</code>
          </span>
          <ul
            class="sb-spacing-wrapper"
            style="gap: var(--spacing-${token}); padding-left: 0;"
          >
            ${Array.from({ length: 7 }).map(
              () => html`
                <li
                  class="sb-list__visualization"
                  style="width: 50px; height: 50px; background-color: var(--colors-sb-visualization);"
                ></li>
              `,
            )}
          </ul>
        </li>
      `,
    );

    return html`
      <div>
        <h2 class="sb-title">Spacing Tokens</h2>
        <ul class="sb-list">
          ${items}
        </ul>
      </div>
    `;
  }
}
