import { html } from 'lit-html';
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'theme-a',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: [
        {value: 'theme-a', title: 'Theme A'},
        {value: 'theme-b', title: 'Theme B'}
      ],
    },
  },
};

// const storyWithTheme=(story, context)=>{
//   console.log(context.globals.theme);
//   const theme = context.globals.theme;
//   return (
//     (story) => html`<div class='${theme}'>${story()}</div>`
//   )
// }

// export const decorators = [storyWithTheme];

export const decorators = [(story, context) => 
  html`<div class='${context.globals.theme}'>${story()}</div>`]

// export const decorators = [(story) => html`<div class='${theme}'>${story()}</div>`]