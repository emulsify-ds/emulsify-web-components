import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';
import './tabs';

const meta: Meta = {
  title: 'Components/Tabs',
  component: 'emulsify-tabs',
};

export default meta;

const tabsData = [
  {
    title: 'Tab 1',
    content: html`<p>Content for Tab 1</p>`
  },
  {
    title: 'Tab 2',
    content: html`<p>Content for Tab 2</p>`
  },
  {
    title: 'Tab 3',
    content: html`<p>Content for Tab 3</p>`
  },
];

export const Default: StoryObj = {
  args: {
    data: tabsData,
  },
};
