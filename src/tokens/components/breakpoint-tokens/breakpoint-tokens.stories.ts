import type { Meta, StoryObj } from '@storybook/web-components';
import figma from '../../../../.storybook/configma.json';
import tokens from '../../transformed.tokens.json';

import './breakpoint-tokens';

const meta: Meta = {
  title: 'Tokens/Breakpoint',
  component: 'breakpoint-tokens',
};

export default meta;

export const Breakpoint: StoryObj = {
  args: {
    tokens: tokens.breakpoint,
  },
  parameters: {
    design: {
      type: 'figma',
      url: `${figma.url}${figma.breakpoint}`,
    },
  },
};
