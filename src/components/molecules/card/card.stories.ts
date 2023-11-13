import { html } from 'lit';
import './card';

// Define the arguments for the card component
export interface CardArgs {
  src: string;
  title: string;
  text: string;
  url: string;
}

// Define the card component
export const EmulsifyCard = ({ src, title, text, url }: CardArgs) => html`
  <ewc-card url=${url} src=${src} title=${title} text=${text}></ewc-card>
`;

// Define the story
export default {
  title: 'Molecules/Card',
  component: 'ewc-card',
  argTypes: {
    src: { control: 'text', description: 'Image source', name: 'Card image source'},
    title: { control: 'text', description: 'Card title', name: 'Card title'},
    text: { control: 'text', description: 'Card text', name: 'Card text'},
    url: { control: 'text', description: 'Card link', name: 'Card link'},
  },
};

// Add the defaultValue property to the argTypes object
(EmulsifyCard as any).args = {
  src: 'https://placehold.co/600x400',
  title: 'Card title',
  text: 'Quae neque repudiandae ducimus dicta et asperiores rerum. Vel sunt magni voluptates ex minus quas numquam.',
  url: 'https://google.com',
};
