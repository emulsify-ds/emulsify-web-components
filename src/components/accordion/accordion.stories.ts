import { Meta, StoryObj } from '@storybook/web-components';

import './accordion';

const meta: Meta = {
  title: 'Components/Accordion',
  component: 'emulsify-accordion',
};

const accordionItem = {
  heading: 'Lorem ipsum dolor sit amet',
  content: 'Contrary to popular belief, <a href="https://www.lipsum.com/" target="_blank">Lorem Ipsum</a> is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
  active: false,
};

const accordionItems = Array.from({ length: 3 }, () => ({ ...accordionItem }));

export default meta;

export const Accordion: StoryObj = {
  args: {
    items: accordionItems,
    heading: 'Lorem ipsum dolor sit amet',
  },
};
