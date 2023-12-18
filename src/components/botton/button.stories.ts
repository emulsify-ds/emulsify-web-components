import { Meta, StoryObj } from '@storybook/web-components';

import './button';

const meta: Meta = {
  title: 'Components/Button',
  component: 'emulsify-button',
};

export default meta;

export const Button: StoryObj = {
  args: {
    label: 'Button label',
    type: 'submit',
    isDisabled: false,
    name: 'button-name',
  },
};
