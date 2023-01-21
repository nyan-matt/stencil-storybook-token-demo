import { html } from 'lit-html';
import readme from './readme.md';

export default {
  title: 'Button',
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' }, 
    variant: {
      control: {
        type: 'inline-radio',
        options: [
          'primary',
          'secondary'
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [
          'small',
          'large'
        ],
      },
    },
  },

  parameters: {
    notes: readme,
  }
};

const Template = ({ label, variant, size, disabled }) => (
  html`<my-button 
  size=${size} 
  variant=${variant} 
  disabled=${disabled} 
  label=${label} 
  />
  `
)

export const ThemeA = Template.bind({});
ThemeA.args = {
  size: 'large',
  variant: 'primary',
  disabled: false,
  label: 'Foo bar AAA',
};

export const ThemeB = Template.bind({});
ThemeB.args = {
  size: 'large',
  variant: 'secondary',
  disabled: false,
  label: 'Foo bar BBB',
};


// export const ButtonThemeA = ({ label, variant, size, disabled }) => html`
//   <my-button 
//     size=${size} 
//     variant=${variant} 
//     disabled=${disabled} 
//     label=${label} 
//     />
// `;

// ButtonThemeA.args = {
//   size: 'large',
//   variant: 'primary',
//   disabled: false,
//   label: 'Foo bar baz',
// };
