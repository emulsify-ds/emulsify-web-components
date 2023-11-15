import {LitElement, html} from 'lit';
import pagerStyles from './styles';
import {customElement, property} from 'lit/decorators.js';

interface PagerData {
  current: number;
  items: {
    first: {
      href: string,
    },
    pages: any;
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
      pages: [],
    }
};
@property({ type: Object }) tokens = {};

static styles = [pagerStyles];

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
      (page: any, index: number) => html`
        <li class="pager__item">
          <a
            class="pager__link ${this.data.current === index ? 'is-active' : ''}" 
            href="${page.href}" 
            title="${this.data.current === index ? 'Current page' : `Go to page ${index}` }"
            ${this.data.current === index ? 'aria-current="page"' : ''}>
            <span class="visually-hidden">
              ${this.data.current === index ? html`Current page` : html`Page`}
            </span>
            ${index}
          </a>
        </li>
      `,
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
