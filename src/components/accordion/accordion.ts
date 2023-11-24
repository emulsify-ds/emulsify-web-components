import { LitElement, html, css } from 'lit';
import { AccordionItem } from './accordion-item';
import { customElement, property } from 'lit/decorators.js';

import './accordion-item';

@customElement('emulsify-accordion')
export class Accordion extends LitElement {
  @property({ type: String }) heading = '';
  @property({ type: Array }) items: AccordionItem[] = [];

  static styles = css`
    .accordion {
      display: flex;
      flex-direction: column;
      padding-block: var(--spacing-sm);
    }

    .accordion__controls {
      display: flex;
      gap: var(--spacing-md);
    }

    .accordion__controls__item {
      cursor: pointer;
    }

    .accordion__controls__item:not(:last-child) {
      padding-right: var(--spacing-sm);
      margin-right: var(--spacing-sm);
    }
  `;

  toggleItem(index: number) {
    this.items[index].active = !this.items[index].active;
    this.requestUpdate();
  }

  toggleAll(state: boolean) {
    this.items.map((item) => (item.active = state));
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="accordion">
        ${this.heading
          ? html` <h2 class="accordion__heading">${this.heading}</h2> `
          : ``}
        <div class="accordion__controls">
          <div
            role="button"
            class="accordion__controls__item"
            @click=${() => this.toggleAll(true)}
          >
            Expand All ${html`&#43;`}
          </div>
          <div
            role="button"
            class="accordion__controls__item"
            @click=${() => this.toggleAll(false)}
          >
            Collapse All ${html`&#8722;`}
          </div>
        </div>
        ${this.items.map(
          (item, index) => html`
            <emulsify-accordion-item
              .active=${item.active}
              .heading=${item.heading}
              .content=${item.content}
              @press="${() => this.toggleItem(index)}"
            />
          `,
        )}
      </div>
    `;
  }
}
