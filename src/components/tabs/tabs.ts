import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

// Define an interface for the structure of each tab
interface Tab {
  title: string;
  content: unknown;
}

@customElement('emulsify-tabs')
export class Tabs extends LitElement {
  @property({ type: Object }) data: Tab[] = [];
  @state() activeTabIndex = 0;

  static styles = css`
    .tabs {
      display: flex;
      cursor: pointer;
    }

    .tab {
      padding: var(--spacing-md) var(--spacing-xl);
      margin-right:  var(--spacing-md);
      background-color: var(--tabs-color-bg-inactive);
      border: 1px solid var(--tabs-color-bg-inactive);
      font-family: var(--font-family-body);
      font-weight: var(--font-weight-primary-bold);
      color: var(--tabs-color-text-default);
    }

    .tab:hover {
      background-color: var(--tabs-color-bg-hover);
      border: 1px solid var(--tabs-color-bg-hover);
      color: var(--tabs-color-text-hover);
    }

    .tab.active {
      background-color: var(--tabs-color-bg-active);
      border: 1px solid var(--tabs-color-text-hover);
      border-bottom: none;
      color: var(--tabs-color-text-hover);
    }

    .content {
      border: 1px solid var(--tabs-color-bg-inactive);
      padding: var(--spacing-md);
    }

    .content {
      display: none;
    }

    .content.active {
      display: block;
    }
  `;

  render() {
    return html`
      <div class="tabs">
        ${this.data.map((tab, index) => html`
          <div
            class="tab ${index === this.activeTabIndex ? 'active' : ''}"
            @click="${() => this.handleTabClick(index)}"
          >
            ${tab.title}
          </div>
        `)}
      </div>
      ${this.data.map((tab, index) => html`
        <div class="content ${index === this.activeTabIndex ? 'active' : ''}">
          ${tab.content}
        </div>
      `)}
    `;
  }

  private handleTabClick(index: number) {
    this.activeTabIndex = index;
  }
}
