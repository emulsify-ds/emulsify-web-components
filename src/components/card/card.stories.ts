import { Meta, StoryObj } from '@storybook/web-components';

import './card';

const meta: Meta = {
  title: 'Components/Card',
  component: 'emulsify-card',
  argTypes: {
    src: { control: 'text', name: 'Card image'},
    alt: { control: 'text', name: 'Card image alt'},
    title: { control: 'text', name: 'Card title'},
    content: { control: 'text', name: 'Card content'},
    url: { control: 'text', name: 'Card url'},
  }
};

export default meta;

// Define the card component
export const Card: StoryObj = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'This is a placeholder image',
    title: 'Card title',
    content: 'Quae neque repudiandae ducimus dicta et asperiores rerum. Vel sunt magni voluptates ex minus quas numquam.',
    url: 'https://google.com',
  },
};
