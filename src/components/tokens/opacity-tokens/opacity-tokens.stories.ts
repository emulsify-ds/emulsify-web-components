import type { Meta, StoryObj } from '@storybook/web-components';
import tokens from '../../../tokens/transformed.tokens.json';
import figma from '../../../../.storybook/configma.json';

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
