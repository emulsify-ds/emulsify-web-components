import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface AccordionItem {
  heading: string;
  content: string;
  active: boolean;
}

@customElement('emulsify-accordion-item')
export class Accordion extends LitElement {
  @property({ type: String }) heading = '';
  @property({ type: String }) content = '';
  @property({ type: Boolean }) active = false;

  static styles = css`
    .accordion-item {
      border-bottom: 1px solid var(--accordion-divider-color);
    }

    .accordion-item__heading {
      cursor: pointer;
      display: flex;
      padding-block: var(--size-lg);
      color: var(--accordion-color-header);
    }

    .accordion-item__heading:hover {
      color: var(--accordion-color-header-hover);
    }

    .accordion-item__title {
      flex: 1;
      margin-block: var(--size-md);
      font-size: var(--font-size-small);
    }

    .accordion-item__toggle {
      font-size: var(--font-size-lead);
    }

    .accordion-item__content {
      display: none;
    }

    .accordion-item__content.active {
      display: block;
      margin-bottom: var(--size-lg);
      font-size: var(--font-size-small);
    }
  `;

  toggle() {
    this.active = !this.active;
    this.requestUpdate();
  }

  render() {
    return html`
    <div class="accordion-item ${this.active ? 'active' : ''}">
      <div
        class="accordion-item__heading"
        @click=${() => this.toggle()}
      >
        <h3 class="accordion-item__title">${this.heading}</h3>
        <span class="accordion-item__toggle">
          ${this.active ? html`&#8722;` : html`&#43;`}
        </span>
      </div>
      <div
        class="accordion-item__content ${this.active ? 'active' : ''}"
        .innerHTML=${this.content}
      ></div>
    </div>
    `;
  }
}
