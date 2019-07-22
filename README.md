[![Build Status](https://travis-ci.org/angeliski/vue-tabulator.svg?branch=master)](https://travis-ci.org/angeliski/vue-tabulator) [![Coverage Status](https://coveralls.io/repos/github/angeliski/vue-tabulator/badge.svg?branch=master)](https://coveralls.io/github/angeliski/vue-tabulator?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/angeliski/vue-tabulator.svg)](https://greenkeeper.io/)

# ![logo](./docs/.vuepress/public/assets/img/logo.png)

# Documentation

You can see the full documentation in: [https://vue-tabulator.netlify.com/](https://vue-tabulator.netlify.com/).

# Getting Started

The vue-tabulator is a wrapper to Tabulator, so you need [install the tabulator](http://tabulator.info/docs/4.2/install#sources-npm) to use vue-tabulator.

Install vue-tabulator using [`npm`](https://www.npmjs.com/package/vue-tabulator):

```bash
npm install --save vue-tabulator
```

Or [`yarn`](https://yarnpkg.com/en/package/vue-tabulator):

```bash
yarn add --dev jest
```

Note: Vue-tabulator documentation uses `npm` commands, but `yarn` will also work. You can compare `yarn` and `npm` commands in the [yarn docs, here](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison).

Then, register vue-tabulaor plugin in your app entry point:

```javascript
import Vue from 'vue';
import VueTabulator from 'vue-tabulator';

Vue.use(VueTabulator);
```

And import theme scss files:

```css
<style lang='scss'>

@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

</style>
```

Note: Import the scss files is not required, but If you import, should configure your project to compile to css.

In your component, you can use the VueTabulator component:

```html
<VueTabulator v-model="data" :options="options" />
```

The v-model and the options are required and you can use the pass the content of table and the configuration, respectively.

You can see another docs in [documetation](https://vue-tabulator.netlify.com/).

## Develop Contributing

See [CONTRIBUTING](./.github/CONTRIBUTING).