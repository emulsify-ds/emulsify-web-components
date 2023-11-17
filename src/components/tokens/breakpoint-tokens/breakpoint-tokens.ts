import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tokenSharedStyles from '../tokens-shared/styles';
import { type TokensType } from '../tokens-shared/types';

@customElement('breakpoint-tokens')
export class BreakpointTokens extends LitElement {
  @property()
  tokens: TokensType = {};

  static styles = [tokenSharedStyles];

  override render() {
    const items = Object.entries(this.tokens).map(
      ([token, data]) => html`
        <li class="sb-list__item" style="min-width: max-content;">
          <span class="sb-list__label">${token}</span>
          <span class="sb-list__value">${data.value}px</span>
          <span class="sb-list__custom-property">
            <code class=" sb-custom-property-name"
              >var(--breakpoint-${token})</code
            >
          </span>
          <span
            class="sb-list__visualization"
            style="width: var(--breakpoint-${token}); height: 25px; background: var(--colors-sb-visualization); display: block; border-radius: var(--radius-sm);"
          ></span>
        </li>
      `,
    );

    return html`
      <div>
        <h2 class="sb-title">Breakpoint Tokens</h2>
        <ul class="sb-list" style="overflow: scroll;">
          ${items}
        </ul>
      </div>
    `;
  }
}
