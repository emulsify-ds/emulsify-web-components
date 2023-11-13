import { html } from 'lit';

import './Accordion';

export default {
  title: 'Components/Accordion',
};

const items = [
  {
    heading: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet fermentum nibh vitae ornare hendrerit. Viverra aliquet ultrices pretium imperdiet ultrices eleifend cras semper eu convallis porttitor. Risus fusce aliqua mauris lacus interdum justo cursus fusce eleifend dictum a. Habitasse arcu iaculis quam lacus laoreet nibh nisl malesuada quis diam convallis sodales erat. Eleifend vestibulum duis augue eiusmod pulvinar dictumst vestibulum semper iaculis.',
    active: false
  },
  {
    heading: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet fermentum nibh vitae ornare hendrerit. Viverra aliquet ultrices pretium imperdiet ultrices eleifend cras semper eu convallis porttitor. Risus fusce aliqua mauris lacus interdum justo cursus fusce eleifend dictum a. Habitasse arcu iaculis quam lacus laoreet nibh nisl malesuada quis diam convallis sodales erat. Eleifend vestibulum duis augue eiusmod pulvinar dictumst vestibulum semper iaculis.',
    active: false
  },
  {
    heading: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet fermentum nibh vitae ornare hendrerit. Viverra aliquet ultrices pretium imperdiet ultrices eleifend cras semper eu convallis porttitor. Risus fusce aliqua mauris lacus interdum justo cursus fusce eleifend dictum a. Habitasse arcu iaculis quam lacus laoreet nibh nisl malesuada quis diam convallis sodales erat. Eleifend vestibulum duis augue eiusmod pulvinar dictumst vestibulum semper iaculis.',
    active: false
  },
];

export const Accordion = () => html`
  <ewc-accordion .items=${items}></ewc-accordion>
`;
