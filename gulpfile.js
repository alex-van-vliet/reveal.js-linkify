/*
 * Heavily inspired from https://github.com/hakimel/reveal.js/blob/df355eca3a68a463a8bdff799a050e2a1419a7d4/gulpfile.js.
 */

const pkg = require('./package.json');

const { rollup } = require('rollup');
const { terser } = require('rollup-plugin-terser');
const babel = require('@rollup/plugin-babel').default;
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve').default;

const gulp = require('gulp');

// Prevents warnings from opening too many test pages
process.setMaxListeners(20);

const name = 'Linkify';
const input = './plugin/linkify/plugin.js';
const output = './plugin/linkify/linkify';

const babelConfig = {
  babelHelpers: 'bundled',
  ignore: ['node_modules'],
  compact: false,
  extensions: ['.js', '.html'],
  plugins: [
    'transform-html-import-to-string',
  ],
  presets: [[
    '@babel/preset-env',
    {
      corejs: 3,
      useBuiltIns: 'usage',
      modules: false,
    },
  ]],
};

// Our ES module bundle only targets newer browsers with
// module support. Browsers are targeted explicitly instead
// of using the "esmodule: true" target since that leads to
// polyfilling older browsers and a larger bundle.
const babelConfigESM = JSON.parse(JSON.stringify(babelConfig));
babelConfigESM.presets[0][1].targets = {
  browsers: [
    'last 2 Chrome versions',
    'last 2 Safari versions',
    'last 2 iOS versions',
    'last 2 Firefox versions',
    'last 2 Edge versions',
  ],
};

let cache = {};
const banner = `/*!
* reveal.js-linkify ${pkg.version}
* ${pkg.homepage}
* GNU GPLv3 Licensed
*
* Copyright (C) 2023, https://alexvanvliet.pro
*/\n`;


// Creates a UMD and ES module for the plugin
gulp.task('build', () => {
  return rollup({
    cache: cache[input],
    input: input,
    plugins: [
      resolve(),
      commonjs(),
      babel(babelConfig),
      terser(),
    ],
  }).then(bundle => {
    cache[input] = bundle.cache;
    bundle.write({
      file: output + '.esm.js',
      name: name,
      format: 'es',
      banner: banner,
    });

    bundle.write({
      file: output + '.js',
      name: name,
      format: 'umd',
      banner: banner,
    });
  });
});
