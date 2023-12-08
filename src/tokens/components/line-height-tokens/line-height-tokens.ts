import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import tokenSharedStyles from '../tokens-shared/styles';
import { type TokensType } from '../tokens-shared/types';

@customElement('line-height-tokens')
export class LineHeightTokens extends LitElement {
  @property()
  tokens: TokensType = {};

  static styles = [tokenSharedStyles];

  override render() {
    const text =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const items = Object.entries(this.tokens).map(
      ([token, data]) => html`
        <li class="sb-list__item" style="min-width: max-content;">
          <span class="sb-list__label" style="width: 100px;">${token}</span>
          <span class="sb-list__value">${data.value}</span>
          <span class="sb-list__custom-property">
            <code class="sb-custom-property-name" style="width: 272px;"
              >var(--line-height-${token})</code
            >
          </span>
          <span
            class="sb-list__visualization"
            style="max-width: 600px; line-height: var(--line-height-${token});"
            >${text}</span
          >
        </li>
      `,
    );

    return html`
      <div>
        <h2 class="sb-title">Line Heights</h2>
        <ul class="sb-list" style="overflow: scroll;">
          ${items}
        </ul>
      </div>
    `;
  }
}
