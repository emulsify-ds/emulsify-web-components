import type { Meta, StoryObj } from '@storybook/web-components';
import figma from '../../../../.storybook/configma.json';
import tokens from '../../transformed.tokens.json';

import './opacity-tokens';

const meta: Meta = {
  title: 'Tokens/Opacity',
  component: 'opacity-tokens',
};

export default meta;

export const Opacity: StoryObj = {
  args: {
    tokens: tokens.opacity,
  },
  parameters: {
    design: {
      type: 'figma',
      url: `${figma.url}${figma.opacity}`,
    },
  },
};
