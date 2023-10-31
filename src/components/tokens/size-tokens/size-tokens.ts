import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tokenSharedStyles from '../tokens-shared/styles';
import { type TokensType } from '../tokens-shared/types';

@customElement('size-tokens')
export class SizeTokens extends LitElement {
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
            <code class="sb-custom-property-name">var(--size-${token})</code>
          </span>
          <span
            class="sb-list__visualization"
            style="width: ${data.value}px; height: ${data.value}px; background-color: var(--colors-sb-visualization);"
          ></span>
        </li>
      `,
    );

    return html`
      <div>
        <h2 class="sb-title">Size Tokens</h2>
        <ul class="sb-list">
          ${items}
        </ul>
      </div>
    `;
  }
}
