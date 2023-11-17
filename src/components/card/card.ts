import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
@customElement('emulsify-card')
export class Card extends LitElement {
  @property({ type: String })
  src: string = '';

  @property({ type: String })
  title: string = '';

  @property({ type: String })
  content: string = '';

  @property({ type: String })
  url: string = '';

  @property({ type: String })
  alt: string = '';

  static styles = css`
    .card {
      display: flex;
      flex-flow: column nowrap;
      gap: var(--card-spacing);
      text-align: left;
      position: relative;
    }

    .card:focus-within {
      box-shadow:0 0 0 0.25rem var(--link-color-hover);
    }
    
    .card__image { 
      width: 100%;
      max-width: 100%;
    }
    
    .card__title {
      color: var(--color-grays-500);
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.2;
      margin: 0;
    }
    
    .card__content {
      font-size: 1rem;
      line-height: 1.2;
      margin: 0;
    }
    
    .card__link {
      color: var(--color-grays-600);
    }

    .card__link:hover {
      color: var(--link-color-hover);
      text-decoration: none;
    }
  `;

  render() {
    return html`
      <div class="card">
        <a class="card__link" href=${this.url}>
          <img class="card__image" src=${this.src} alt=${this.alt} />
        </a>
        <h2 class="card__title">
          <a class="card__link" href=${this.url}>
            ${this.title}
          </a>
        </h2>
        <p class="card__content">${this.content}</p>
      </div>
    `;
  }
}
