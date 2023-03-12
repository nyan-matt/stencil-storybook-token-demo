# Design token automation (build and deploy components)
This is a companion project to [token-demo-src](https://github.com/nyan-matt/token-demo-src), an example design token build pipeline.

This repo contains a sample component built in [Stencil](https://stenciljs.com) documented in [Storybook](https://storybook.js.org/) that consumes design token pipeline outputs (css variables) for a themeable button component. 

The repository has a [companion blog post](https://matthewrea.com/blog/design-token-automation-from-figma-to-storybook/) if you'd like more context.

## High-level workflow
### [`token-demo-src`](https://github.com/nyan-matt/token-demo-src)
- Watch for design token changes
- Transform tokens
- Output css variables
- Push css variables to [`stencil-storybook-token-demo`](https://github.com/nyan-matt/stencil-storybook-token-demo)

### [`stencil-storybook-token-demo`](https://github.com/nyan-matt/stencil-storybook-token-demo)
- Watch for css variable changes
- Trigger new stencil / storybook build
- Deploy to [Github Pages](https://nyan-matt.github.io/stencil-storybook-token-demo/?path=/story/button--multi-theme)


## Running locally
### Stencil
`npm start`

### Storybook
`npm run storybook`

### Build Storybook
`npm run build-storybook` - /doc folder configured
