import readme from './readme.md';
import { html } from 'lit-html';

export default {
  title: 'My Component',
  argTypes: {
    first: { control: 'text' },
    middle: { control: 'text' },
    last: { control: 'text' },
  },
  parameters: {
    notes: readme,
  },
};

export const Default = ({ first, middle, last }) => html`
  <my-component first=${first} middle=${middle} last=${last} />
`;

Default.args = {
  first: 'Milly',
  middle: 'Bobby',
  last: 'Brown',
};
