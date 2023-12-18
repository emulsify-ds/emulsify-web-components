import { Meta, StoryObj } from '@storybook/web-components';

import './breadcrumb';

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: 'emulsify-breadcrumb',
};

export default meta;

const breadcrumbData = {
  items: {
    1: {
      title: 'Home',
      href: '/',
    },
    2: {
      title: 'Level 2',
      href: '/level-2',
    },
    3: {
      title: 'Level 3',
      href: '/level-2/level-3',
    },
  }
};

// Define the breadcrumbs component
export const Breadcrumb: StoryObj = {
  args: {
    data: breadcrumbData,
  },
};
