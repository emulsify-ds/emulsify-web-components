import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { visuallyHiddenStyle } from '../../assets/classes';

@customElement('emulsify-breadcrumb')
export class Breadcrumb extends LitElement {

  @property({ type: Object }) tokens = {};

  static styles = [
    visuallyHiddenStyle,
    css` 
    .breadcrumb__items {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .breadcrumb__item {
      display: inline-block;
      color: var(--color-text-body);

      &::after {
        content: "/";
      }

      &:last-child::after {
        content: "";
      }
    }

    .breadcrumb__link,
    .breadcrumb__link:link,
    .breadcrumb__link:visited,
    .breadcrumb__link:focus {
      color: var(--breadcrumb-text-default);
      text-decoration: none;
    }

    .breadcrumb__link:hover {
      color: var(--breadcrumb-text-hover);
    }`
  ];
  data: any;

  renderBreadcrumbItems() {
    const items = Object.values(this.data.items);

    return items.map((item: any, index: number) => {
      const hrefValue = item.href;
      const titleValue = item.title;
      if (index === items.length - 1) {
        return html`
          <li class="breadcrumb__item breadcrumb__item--current">
            ${titleValue}
          </li>
        `;
      } else {
        return html`
          <li class="breadcrumb__item">
            <a class="breadcrumb__link" href="${hrefValue}">
              ${titleValue}
            </a>
          </li>
        `;
      }
    });
  }

  render() {
    return html`
    <nav role='navigation' aria-labelledby='system-breadcrumb' class='breadcrumb'>
      <h2 class='breadcrumb__title visually-hidden' id='system-breadcrumb'>Breadcrumb Menu</h2>
      <ol class='breadcrumb__items'>
        ${this.renderBreadcrumbItems()}
      </ol>
      </nav>
    `;
  }
}
