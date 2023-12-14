import type { Meta, StoryObj } from '@storybook/web-components';
import figma from '../../../../.storybook/configma.json';
import tokens from '../../transformed.tokens.json';

import './size-tokens';

const meta: Meta = {
  title: 'Tokens/Size',
  component: 'size-tokens',
};

export default meta;

export const Size: StoryObj = {
  args: {
    tokens: tokens.size,
  },
  parameters: {
    design: {
      type: 'figma',
      url: `${figma.url}${figma.size}`,
    },
  },
};
