import type { Meta, StoryObj } from '@storybook/web-components';
import tokens from '../../../tokens/transformed.tokens.json';
import figma from '../../../../.storybook/configma.json';

import './line-height-tokens';

const meta: Meta = {
  title: 'Tokens/Line Height',
  component: 'line-height-tokens',
};

export default meta;

export const LineHeight: StoryObj = {
  args: {
    tokens: tokens['line-height'],
  },
  parameters: {
    design: {
      type: 'figma',
      url: `${figma.url}${figma.lineHeight}`,
    },
  },
};
