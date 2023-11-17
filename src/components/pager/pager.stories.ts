import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

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
    next: true,
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

const withPreviousData = {
  current: 8,
  ellipses: {
    previous: true,
    next: false,
  },
  items: {
    previous: {
      href: '#',
    },
    pages: [
      { 5: { href: '#' }},
      { 6: { href: '#' }},
      { 7: { href: '#' }},
      { 9: { href: '#' }},
      { 9: { href: '#' }}
    ],
  }   
};

const withFirstAndLastData = {
  current: 10,
  ellipses: {
    previous: true,
    next: true,
  },
  items: {
    first: {
      href: '#',
    },
    last: {
      href: '#',
    },
    previous: {
      href: '#',
    },
    next: {
      href: '#',
    },
    pages: [
      { 9: { href: '#' }},
      { 10: { href: '#' }},
      { 11: { href: '#' }},
      { 12: { href: '#' }},
      { 13: { href: '#' }}
    ],
  }   
};

export const BasicPager: StoryObj = {
  args: {
    data: basicPagerData,
  },
};

export const withNextPager: StoryObj = {
  args: {
    data: withNextPagerData,
  },
};

export const withBothPager: StoryObj = {
  args: {
    data: withBothPagerData,
  },
};

export const withPrevious: StoryObj = {
  args: {
    data: withPreviousData,
  },
};

export const withFirstAndLast: StoryObj = {
  args: {
    data: withFirstAndLastData,
  },
};
