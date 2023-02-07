import{html}from"lit-html";import"./button.css";export const Button=({primary:primary,backgroundColor:backgroundColor,size:size,label:label,onClick:onClick})=>html`
    <button
      type="button"
      class=${["storybook-button","storybook-button--"+(size||"medium"),primary?"storybook-button--primary":"storybook-button--secondary"].join(" ")}
      style=${backgroundColor&&{backgroundColor:backgroundColor}}
      @click=${onClick}
    >
      ${label}
    </button>
  `;