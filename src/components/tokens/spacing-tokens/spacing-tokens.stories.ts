import type { Meta, StoryObj } from '@storybook/web-components';
import tokens from '../../../tokens/transformed.tokens.json';
import figma from '../../../../.storybook/configma.json';

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
