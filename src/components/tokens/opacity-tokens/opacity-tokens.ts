import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tokenSharedStyles from '../tokens-shared/styles';
import { type TokensType } from '../tokens-shared/types';

@customElement('opacity-tokens')
export class OpacityTokens extends LitElement {
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
            <code class="sb-custom-property-name">var(--opacity-${token})</code>
          </span>
          <span
            class="sb-list__visualization"
            style="opacity:
            var(--opacity-${token}); display: block; width: 50px; height: 50px;
            background-color: var(--colors-sb-visualization); border-radius:
            var(--radius-sm);"
          ></span>
        </li>
      `,
    );

    return html`
      <div>
        <h2 class="sb-title">Opacity Tokens</h2>
        <ul class="sb-list">
          ${items}
        </ul>
      </div>
    `;
  }
}
