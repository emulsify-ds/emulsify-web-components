import { Meta, StoryObj } from '@storybook/web-components';

import './accordion';

const meta: Meta = {
  title: 'Components/Accordion',
  component: 'emulsify-accordion',
};

const accordionItem = {
  heading: 'Lorem ipsum dolor sit amet',
  content: 'Lorem ipsum dolor sit amet fermentum nibh vitae ornare hendrerit. Viverra aliquet ultrices pretium imperdiet ultrices eleifend cras semper eu convallis porttitor. Risus fusce aliqua mauris lacus interdum justo cursus fusce eleifend dictum a. Habitasse arcu iaculis quam lacus laoreet nibh nisl malesuada quis diam convallis sodales erat. Eleifend vestibulum duis augue eiusmod pulvinar dictumst vestibulum semper iaculis.',
  active: false,
};

const accordionItems = Array.from({ length: 3 }, () => ({ ...accordionItem }));

export default meta;

export const Accordion: StoryObj = {
  args: {
    items: accordionItems,
  },
};
