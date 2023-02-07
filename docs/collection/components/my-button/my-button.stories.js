import{html}from"lit-html";import readme from"./readme.md";export default{title:"Button",argTypes:{label:{control:"text"},disabled:{control:"boolean"},variant:{control:{type:"inline-radio",options:["primary","secondary","tertiary"]}},size:{control:{type:"inline-radio",options:["large","small"]}}},parameters:{notes:readme}};const Template=({label:label,variant:variant,size:size,disabled:disabled})=>html`<my-button 
  size=${size} 
  variant=${variant} 
  disabled=${disabled} 
  label=${label} 
  />
  `;export const MultiTheme=Template.bind({});MultiTheme.args={size:"large",variant:"primary",disabled:!1,label:"Multi theme button"};