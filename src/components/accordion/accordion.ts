import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

interface AccordionItem {
  heading: string;
  content: string;
  active: boolean;
}

@customElement('ewc-accordion')
export class Accordion extends LitElement {
  @property({ type: Array }) items: AccordionItem[] = [];

  static styles = css`
    .accordion {
      display: flex;
      flex-direction: column;
      margin-bottom: var(--size-lg);
    }

    .accordion-item {
      border-bottom: 1px solid var(--accordion-divider-color);
      padding-top: var(--spacing-lg);
    }

    .accordion-item__heading {
      cursor: pointer;
      position: relative;
      padding: var(--size-lg);
      font-size: var(--font-size-small);
    }

    .accordion-item__heading:hover {
      background-color: var(--accordion-color-header-hover);
    }

    .accordion-item__toggle {
      position: absolute;
      right: var(--size-lg);
      line-height: var(--size-lg);
      font-size: var(--font-size-lead);
    }

    .accordion-item__content {
      display: none;
    }

    .accordion-item__content.active {	
      display: block;
      padding: var(--size-lg);
      font-size: var(--font-size-body);
      border-top: 1px solid var(--color-grays-100);
    }
  `;

  toggle(index: number) {
    this.items[index].active = !this.items[index].active;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="accordion">
        ${this.items.map(
          (item, index) => html`
            <div
              class="accordion-item ${item.active ? 'active' : ''}" 
            >
              <div class="accordion-item__heading" @click=${() => this.toggle(index)}>
                ${item.heading}
                <span class="accordion-item__toggle">
                  ${item.active ? html`&#8722;` : html`&#43;`}
                </span>
              </div>
              <div class="accordion-item__content ${item.active ? 'active' : ''}">
                ${item.content}
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}
