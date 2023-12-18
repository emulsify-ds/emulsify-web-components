import type { Meta, StoryObj } from '@storybook/web-components';
import figma from '../../../../.storybook/configma.json';
import tokens from '../../transformed.tokens.json';

import './border-tokens';

const meta: Meta = {
  title: 'Tokens/Border',
  component: 'border-tokens',
};

export default meta;

export const Border: StoryObj = {
  args: {
    tokens: tokens.border,
  },
  parameters: {
    design: {
      type: 'figma',
      url: `${figma.url}${figma.border}`,
    },
  },
};
