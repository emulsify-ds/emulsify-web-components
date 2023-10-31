import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tokenSharedStyles from '../tokens-shared/styles';
import { type TokensType } from '../tokens-shared/types';

@customElement('color-tokens')
export class ColorTokens extends LitElement {
  @property()
  tokens: TokensType = {};

  static styles = [tokenSharedStyles];

  override render() {
    const items = Object.entries(this.tokens).map(
      ([token, data]) => html`
        <h2 class="sb-title">${token}</h2>
        <ul class="sb-list">
          ${data.value
            ? html`
                <li
                  style="background: var(--color-${token});"
                  class="token-card"
                >
                  <span>
                    ${token}
                    <span>
                      <code class="sb-custom-property-name"
                        >var(--color-${token})</code
                      >
                    </span>
                  </span>
                </li>
              `
            : html`
                <ul class="sb-list">
                  ${Object.entries(data).map(
                    ([subToken]) => html`
                      <li
                        style="background: var(--color-${token}-${subToken});"
                        class="token-card"
                      >
                        <span>
                          ${subToken}
                          <span>
                            <code class="sb-custom-property-name"
                              >var(--color-${token}-${subToken})</code
                            >
                          </span>
                        </span>
                      </li>
                    `,
                  )}
                </ul>
              `}
        </ul>
      `,
    );

    return html`
      <div>
        <h2 class="sb-title">Color Tokens</h2>
        ${items}
      </div>
    `;
  }
}
