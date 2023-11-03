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
      ([token, data]) => {
        const newToken = token.replace(/\B([A-Z])\B/g, '-$1').toLowerCase();
        console.log(Object.entries(data));

        return html`
          <h3 class="sb-title-token">${token}</h3>
          <ul class="sb-color-list">
            ${data.value
              ? html`
                <li class="sb-color-list__color">
                  <span  class="sb-color-list__swatch" style="background: var(--color-${token});">
                  </span>
                  <span class="sb-custom-color-name">${token}</span>
                  <span class="sb-custom-color-property-name">${data.value}</span>
                  <span class="sb-custom-property-name">var(--color-${token})</span>
                </li>
                `
              : html`
                  <ul class="sb-color-sub-list">
                    ${Object.entries(data).map(
                      (subToken) => html`
                        <li class="sb-color-list__color">
                          <span  class="sb-color-list__swatch" style="background: var(--color-${newToken}-${subToken[0]});">
                          </span>
                          <span class="sb-custom-color-name">${subToken[0]}</span>
                          <span class="sb-custom-color-property-name">
                            ${subToken[1].value}
                        </span>
                          <span class="sb-custom-property-name">var(--color-${newToken}-${subToken[0]})</span>
                        </li>
                      `,
                    )}
                  </ul>
                `}
          </ul>
        `;
        
      }
    );

    return html`
      <div>
        <h2 class="sb-title">Color Tokens</h2>
        ${items}
      </div>
    `;
  }
}
