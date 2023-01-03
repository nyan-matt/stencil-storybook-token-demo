const fs = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const OUTPUT_DIR = '../dist';
const PROJECT_NAME = 'stencil-storybook-token-demo';

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-notes/register',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
  ],
  async webpackFinal(config) {
    config.entry.push(path.join(__dirname, OUTPUT_DIR, `${PROJECT_NAME}.js`));

    fs.readdirSync(path.join(__dirname, OUTPUT_DIR, 'collection/components')).map(file => {
      const jsFilePath = path.join(__dirname, OUTPUT_DIR, `collection/components/${file}/${file}.js`);

      try {
        if (fs.existsSync(jsFilePath)) {
          config.entry.push(jsFilePath);
        }
      } catch (err) {
        console.error(err);
      }

      const cssFilePath = path.join(
        __dirname,
        OUTPUT_DIR,
        `collection/components/${file}/${file}.css`,
      );

      try {
        if (fs.existsSync(cssFilePath)) {
          config.entry.push(cssFilePath);
        }
      } catch (err) {
        console.error(err);
      }
    });

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: '**/*',
            to: './',
            context: 'dist',
          },
        ],
      }),
    );

    config.plugins.push(new WriteFilePlugin());

    return config;
  },
};
