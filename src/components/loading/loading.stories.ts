import { Meta, StoryObj } from '@storybook/web-components';

import './loading';

const meta: Meta = {
  title: 'Components/Loading',
  component: 'ewc-loading',
  argTypes: {
    label: {
      name: 'Component label',
      control: {
        type: 'text',
      },
    },
    size: {
      name: 'Component size',
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    active: {
      name: 'Component display',
      control: 'boolean',
    },
  },
};

export default meta;

export const Loading: StoryObj = {
  args: {
    size: 'md',
    active: true,
    label: 'Sending data...',
  },
};
