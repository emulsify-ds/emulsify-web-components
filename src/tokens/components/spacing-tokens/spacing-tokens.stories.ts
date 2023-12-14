import type { Meta, StoryObj } from '@storybook/web-components';
import figma from '../../../../.storybook/configma.json';
import tokens from '../../transformed.tokens.json';

import './spacing-tokens';

const meta: Meta = {
  title: 'Tokens/Spacing',
  component: 'spacing-tokens',
};

export default meta;

export const Spacing: StoryObj = {
  args: {
    tokens: tokens.spacing,
  },
  parameters: {
    design: {
      type: 'figma',
      url: `${figma.url}${figma.spacing}`,
    },
  },
};
