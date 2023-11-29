import { Meta, StoryObj } from '@storybook/web-components';

import './icons';

const meta: Meta = {
  title: 'Components/Icons',
  component: 'emulsify-icons',
};

const svgIcons = import.meta.glob('../../../images/icons/*.svg');
const icons = [];

for (const key in svgIcons) {
  const icon = key.split('icons/')[1].split('.svg')[0];
  icons.push(icon);
}

export default meta;

export const Icons: StoryObj = {
  args: {
    icons: icons,
  },
};
