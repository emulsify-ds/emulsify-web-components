import type { Meta, StoryObj } from '@storybook/web-components';
import figma from '../../../../.storybook/configma.json';
import tokens from '../../transformed.tokens.json';

import './border-radius-tokens';

const meta: Meta = {
  title: 'Tokens/Border Radius',
  component: 'border-radius-tokens',
};

export default meta;

export const BorderRadius: StoryObj = {
  args: {
    tokens: tokens.radius,
  },
  parameters: {
    design: {
      type: 'figma',
      url: `${figma.url}${figma.borderRadius}`,
    },
  },
};
