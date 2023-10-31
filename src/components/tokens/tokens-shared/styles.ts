import { css } from "lit";

export default css`
  .sb-title {
    color: var(--colors-sb-text-heading);
    text-transform: uppercase;
    font-size: var(--font-size-hero);
    margin: 0 0 var(--spacing-xxl);
    position: relative;
    font-family: var(--font-families-primary), serif !important;
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
    font-family: var(--font-families-primary), serif !important;
    font-size: var(--font-size-h4);
    opacity: var(--opacity-80);
    margin: var(--spacing-xxl) 0 var(--spacing-md);
  }

  .sb-list {
    margin: 0;
    padding: 0;
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
