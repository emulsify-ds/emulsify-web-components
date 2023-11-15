import { css } from "lit";

export default css`
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
