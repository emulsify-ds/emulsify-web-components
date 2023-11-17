import { css } from "lit";

export default css`
  .sb-title {
    color: var(--colors-sb-text-heading);
    text-transform: uppercase;
    font-size: var(--font-size-h1);
    margin: 0 0 var(--spacing-2xl);
    position: relative;
    font-family: var(--font-family-primary), serif !important;
  }

  .sb-title-token {
    color: var(--colors-sb-text-heading);
    text-transform: uppercase;
    font-size: var(--font-size-h3);
    position: relative;
    font-family: var(--font-family-primary), serif !important;
  }

  .sb-title::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: calc(-1 * var(--spacing-lg));
    border-bottom: 10px solid var(--colors-sb-text-heading);
    width: 100px;
  }

  .sb-subtitle {
    font-family: var(--font-family-primary), serif !important;
    font-size: var(--font-size-h4);
    opacity: var(--opacity-80);
    margin: var(--spacing-2xl) 0 var(--spacing-md);
  }

  .sb-list,
  .sb-color-list,
  .sb-color-sub-list {
    margin: 0;
    padding: 0;
  }

  .sb-color-sub-list  {
    display: flex;
    flex-wrap: wrap;
  }

  .sb-color-list li,
  .sb-color-sub-list li {
    display: flex;
    padding: var(--spacing-lg);
    font-size: var(--font-size-small);
    list-style: none;
    max-width: 13rem;
    flex-direction: column;
    cursor: pointer;
  }

  .sb-color-list__swatch {
    position: relative;
    width: 11rem;
    height: 6rem;
  }

  .sb-custom-color-name {
    margin: var(--spacing-lg) 0 0;
    text-transform: capitalize;
    font-size: var(--font-size-h5);
  }

  .sb-custom-color-property-name {
    margin: var(--spacing-md) 0;
  }

  .sb-list li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sb-list__item {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-xl) !important;
    padding-bottom: var(--spacing-xl) !important;
    padding-left: var(--spacing-md) !important;
    border-bottom: 1px solid rgb(0 0 0 / 20%);
  }

  .sb-list__label {
    width: 100px;
  }

  .sb-list__value {
    width: 100px;
  }

  .sb-list__custom-property {
    width: 250px;
  }

  .sb-custom-property-name {
    white-space: nowrap;
    background-color: rgb(0 0 0 / 10%);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-sm);
  }

  .sb-spacing-wrapper {
    display: flex;
    flex-flow: row nowrap;
    background-color: #d606c1;
  }
`;
