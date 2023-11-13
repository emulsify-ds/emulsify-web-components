import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ewc-loading')
export class Loading extends LitElement {
  @property({ type: Boolean }) active = false;
  @property({ type: String }) label = 'Loading';
  @property({ type: String }) size: 'sm'|'md'|'lg' = 'md';

  static styles = css`
    .loading {
      display: flex;
      align-items: center;
      column-gap: var(--spacing-lg);
    }

    .loading__spinner {
      border-radius: 50%;
      display: inline-block;
      animation: spin 1s linear infinite;
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-left: 4px solid var(--color-primary-default);
    }

    .loading__spinner[size="sm"] {
      width: var(--size-lg);
      height: var(--size-lg);
    }

    .loading__spinner[size="md"] {
      width: var(--size-xl);
      height: var(--size-xl);
    }

    .loading__spinner[size="lg"] {
      width: var(--size-2xl);
      height: var(--size-2xl);
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  render() {
    return this.active ? html`
      <div class="loading">
        <span class="loading__spinner" size="${this.size}"></span>
        <div class="loading__label">
          ${this.label}
        </div>
      </div>
    ` : html``;
  }
}
