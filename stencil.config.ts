import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-storybook-token-demo',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@nyan-matt/stencil-storybook-token-demo',
      proxiesFile: '../@nyan-matt\/stencil-storybook-token-demo-react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};

