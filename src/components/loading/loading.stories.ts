import { html } from 'lit';

import './loading';

export default {
  title: 'Components/Loading',
  argTypes: {
    label: {
      name: 'Component label',
      control: {
        type: 'text',
      },
    },
    size: {
      name: 'Component size',
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    active: {
      name: 'Component display',
      control: 'boolean',
    },
  },
};

const Template = (args: any) => html`
  <ewc-loading .active=${args.active} .label=${args.label} .size=${args.size}></ewc-loading>
`;

export const Loading = Template.bind({});

Loading.args = {
  size: 'md',
  active: true,
  label: 'Sending data...',
};
