import type { Meta, StoryObj } from '@storybook/web-components';
import figma from '../../../../.storybook/configma.json';
import tokens from '../../transformed.tokens.json';

import './font-size-tokens';

const meta: Meta = {
  title: 'Tokens/Font Size',
  component: 'font-size-tokens',
};

export default meta;

export const FontSize: StoryObj = {
  args: {
    tokens: tokens['font-size'],
  },
  parameters: {
    design: {
      type: 'figma',
      url: `${figma.url}${figma.fontSize}`,
    },
  },
};
