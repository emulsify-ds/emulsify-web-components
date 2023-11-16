import { html } from 'lit';
import type { Meta } from '@storybook/web-components';

import './pager';

const meta: Meta = {
  title: 'Components/Pager',
  component: 'emulsify-pager',
};

export default meta;

const basicPagerData = {
  current: 3,
  ellipses: {
    next: false,
    prev: false
  },
  items: {
    pages: [
      { 1: { href: '#' }},
      { 2: { href: '#' }},
      { 3: { href: '#' }},
      { 4: { href: '#' }},
      { 5: { href: '#' }}
    ],
  }   
};

const withNextPagerData = {
  current: 5,
  ellipses: {
    previous: false,
    next: true,
  },
  items: {
    next: {
      href: '#',
    },
    pages: [
      { 3: { href: '#' }},
      { 4: { href: '#' }},
      { 5: { href: '#' }},
      { 6: { href: '#' }},
      { 7: { href: '#' }}
    ],
  }   
};

const withBothPagerData = {
  current: 5,
  ellipses: {
    previous: true,
    next: true
  },
  items: {
    previous: {
      href: '#',
    },
    next: {
      href: '#',
    },
    pages: [
      { 3: { href: '#' }},
      { 4: { href: '#' }},
      { 5: { href: '#' }},
      { 6: { href: '#' }},
      { 7: { href: '#' }}
    ],
  }   
};

export const basic = () => html`
  <emulsify-pager .data=${basicPagerData}></emulsify-pager>
`;

export const withNext = () => html`
  <emulsify-pager .data=${withNextPagerData}></emulsify-pager>
`;

export const withBoth = () => html`
  <emulsify-pager .data=${withBothPagerData}></emulsify-pager>
`;


// export const withPrevious = () =>
//   pager({ ...pagerData, ...pagerPrevEllipsesData });

// export const withFirstAndLast = () =>
//   pager({ ...pagerData, ...pagerFirstLastData });
