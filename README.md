# ![logo](./docs/.vuepress/public/assets/img/logo.png)

Work in Progress.
PR are welcome.

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

# Options

The current options object can accept any [Tabulator options](http://tabulator.info/docs/4.2/options), that allow you to use the full power of Tabulator on start or configuration.
The only option isn't allowed is the [_data_](http://tabulator.info/docs/4.2/data#array-initial) because the data will be receive is the v-model.

Note: The object options use the Vue [watcher](https://vuejs.org/v2/guide/computed.html#Watchers), so if you update any configuration, the Tabulator will be recreated using the new config.

# v-model

You can provide a array to populate your table, the component will use the [data property](http://tabulator.info/docs/4.2/data#array-initial) to initialize the Tabulator. Any change performed in your v-mode will be reflected in the component, using the [Tabulator reactivity](http://tabulator.info/docs/4.2/reactivity) and Vue [watcher](https://vuejs.org/v2/guide/computed.html#Watchers).

## Develop Contributing

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Run your unit tests

```
npm run test:unit
```
