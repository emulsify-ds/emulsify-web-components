import {LitElement, html, css} from 'lit';
import pagerStyles from './styles';
import {customElement, property} from 'lit/decorators.js';

interface PagerData {
  current: number;
  items: {
    first: {
      href: string,
    },
    pages: [
      {
        key: {
          href: string,
        }
      }
    ];
  }
}

@customElement('ewc-pager')
export class Pager extends LitElement {
@property({ type: Object }) data: PagerData = {
    current: 0,
    items: {
      first: {
        href: '',
      },
      pages: [
        {
          key: {
            href: '',
          },
        },
      ],
    }
};
@property({ type: Object }) tokens = {};

static styles = css`
  .pager {
    margin: var(--spacing-xl) 0;
  }

  .pager__items {
    padding: 0;
    margin: 0;
    text-align: center;
  }

  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .visually-hidden {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    overflow: hidden;
    height: 1px;
    width: 1px;
    word-wrap: normal;
  }

  .pager__item {
    display: inline-block;
    margin: 0;
  }

  .pager__link {
    padding: var(--pager-padding-y) var(--pager-padding-x);
    color: var(--pager-color-text-default);
    text-decoration: none;
  }

  .pager__link:hover,
  .pager__link:focus {
    color: var(--pager-color-text-hover);
    background-color: var(--pager-color-fill-hover);
  }

  .pager__link.is-active {
    color: var(--pager-color-text-focus);
  }

  .pager__link.is-active:hover,
  .pager__link.is-active:focus {
    color: var(--pager-color-text-hover);
  }

  .pager__link--next,
  .pager__link--prev,
  .pager__link--first,
  .pager__link--last {
    display: block;
    padding: var(--pager-padding-y) var(--pager-padding-x);
  }
`;

  override render() {
    const items = this.data.items;

    const firstPage = items.first && 
      html`
        <li class="pager__item pager__item--first">
          <a class="pager__link pager__link--first" href="${items.first.href}" title="Go to first page">
            <span class="visually-hidden">First page</span>
            <span aria-hidden="true">First</span>
          </a>
        </li>
      `
    ;

    // Generate the actual pager piece.
    const pages = items.pages.map(
      (page: any) => {
        const key = parseInt(Object.keys(page)[0]);
        const hrefValue = page[key].href;
        return html`
        <li class="pager__item">
          <a
            class="pager__link ${this.data.current === key ? 'is-active' : ''}" 
            href="${hrefValue}" 
            title="${this.data.current === key ? 'Current page' : `Go to page ${key}` }"
            ${this.data.current === key ? 'aria-current="page"' : ''}>
            <span class="visually-hidden">
              ${this.data.current === key ? html`Current page` : html`Page`}
            </span>
            ${key}
          </a>
        </li>
      `;
     },
    );

    return html`
      <nav class="pager">
        <ul class="pager__items">
          ${firstPage}
          ${pages}
        </ul>
      </nav>
    `;
  }
}
