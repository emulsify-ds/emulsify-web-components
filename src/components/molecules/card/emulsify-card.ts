import { LitElement, css, html, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';

export class EmulsifyCard extends LitElement {
  @property({ type: String })
  src: string = '';

  @property({ type: String })
  title: string = '';

  @property({ type: String })
  text: string = '';

  @property({ type: String })
  url: string = '';

  static styles = css`
    .card {
      width: 100%;
      max-width: 600px;
      padding: 1rem;
    }
    .card__image { 
      width: 100%;
      max-width: 100%;
    }
    .card__title {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.2;
      margin: 0;
    }
    .card__text {
      font-size: 1rem;
      line-height: 1.2;
      margin: 0;
    }
    .card__link {
      color: inherit;
    }
    .card__link:hover {
      text-decoration: none;
    }

  `;

  constructor() {
    super();
  }

  render(): TemplateResult {
    return html`
      <div class="card">
        <a class="card__link" href=${this.url}>
          <img class="card__image" src=${this.src} />
          <h2 class="card__title">${this.title}</h2>
          <p class="card__text">${this.text}</p>
        </a>
      </div>
    `;
  }
}
customElements.define('emulsify-card', EmulsifyCard);
