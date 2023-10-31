import type { Meta, StoryObj } from '@storybook/web-components';
import tokens from '../../../tokens/transformed.tokens.json';

import './color-tokens';

const meta: Meta = {
  title: 'Tokens/Color',
  component: 'color-tokens',
};

export default meta;

export const Color: StoryObj = {
  args: {
    tokens: tokens.color,
  },
};
