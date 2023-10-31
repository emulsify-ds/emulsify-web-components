import type { Meta, StoryObj } from '@storybook/web-components';
import tokens from '../../../tokens/transformed.tokens.json';
import figma from '../../../../.storybook/configma.json';

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
