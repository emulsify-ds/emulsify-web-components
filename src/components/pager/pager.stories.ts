import { html } from 'lit';
import type { Meta } from '@storybook/web-components';
import tokens from '../../tokens/transformed.tokens.json';

import './pager';

const meta: Meta = {
  title: 'Components/Pager',
  component: 'ewc-pager',
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
      { href: '#' },
      { href: '#' },
      { href: '#' },
      { href: '#' },
      { href: '#' }
    ],
  }   
};

export const BasicPager = () => html`
  <ewc-pager .data=${basicPagerData} .tokens=${tokens.pager}></ewc-pager>
`;

// export const basic = () => pager(pagerData);

// export const withNext = () => pager({ ...pagerData, ...pagerNextEllipsesData });

// export const withBoth = () => pager({ ...pagerData, ...pagerBothEllipsesData });

// export const withPrevious = () =>
//   pager({ ...pagerData, ...pagerPrevEllipsesData });

// export const withFirstAndLast = () =>
//   pager({ ...pagerData, ...pagerFirstLastData });
