# Introduction

::: warning
The vue-tabulator is in [release candidate](https://en.wikipedia.org/wiki/Software_release_life_cycle#Release_candidate).

PR are welcome.
:::
The lib [Tabulator](http://tabulator.info/) is great, because is pure JavaScript, but sometimes when using vue-apps we need a better, simple integration, like [reactive data](http://tabulator.info/docs/4.2/release#reactive-data), events, components editors and other things.

How we can be the Great Tabulator better?

Welcome the Vue-Tabulator.

## Getting Started

The vue-tabulator is a wrapper to Tabulator, so you need [install the tabulator](http://tabulator.info/docs/4.2/install#sources-npm) to use vue-tabulator.

Install vue-tabulator using [`npm`](https://www.npmjs.com/package/vue-tabulator):

```bash
npm install --save vue-tabulator
```

Or [`yarn`](https://yarnpkg.com/en/package/vue-tabulator):

```bash
yarn add vue-tabulator
```

::: tip
Vue-tabulator documentation uses `npm` commands, but `yarn` will also work. You can compare `yarn` and `npm` commands in the [yarn docs, here](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison).
:::
Then register vue-tabulator plugin in your app entry point:

```javascript
import Vue from 'vue';
import VueTabulator from 'vue-tabulator';

Vue.use(VueTabulator);
```

::: tip Note
Import the scss files is not required, but If you import, should configure your project to compile to css.
:::

And import theme scss files:

```css
<style lang='scss'>

@import "~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";

</style>
```

In your component, you can use the VueTabulator component:

```html
<VueTabulator v-model="data" :options="options" />
```

The v-model and the options are required and you can use the pass the content of table and the configuration, respectively.
You can change the component name on plugin install:

```javascript
import Vue from 'vue';
import VueTabulator from 'vue-tabulator';

Vue.use(VueTabulator, {
    name: 'AwesomeTable'
});
```
Or register the component only in your component: 


```javascript
import { TabulatorComponent } from "vue-tabulator";

export default {
  name: "home",
  components: {
    'AwesomeLocalTable': TabulatorComponent
  },
  
};
```

## Options

The current options object can accept any [Tabulator options](http://tabulator.info/docs/4.2/options), that allow you to use the full power of Tabulator on start or configuration.
The only option isn't allowed is the [_data_](http://tabulator.info/docs/4.2/data#array-initial) because the data will be receive is the v-model.

:::tip Watchers
The object options use the Vue [watcher](https://vuejs.org/v2/guide/computed.html#Watchers), so if you update any configuration, the Tabulator will be recreated using the new config.
:::

## v-model

You can provide a array to populate your table, the component will use the [data property](http://tabulator.info/docs/4.2/data#array-initial) to initialize the Tabulator. Any change performed in your v-mode will be reflected in the component, using the [Tabulator reactivity](http://tabulator.info/docs/4.2/reactivity) and Vue [watcher](https://vuejs.org/v2/guide/computed.html#Watchers).

## Advanced Interaction

In some cases you will be need use a feature provided by the Tabulator, but not supported by the vue-tabulator. If you need some like that, you can use the tabulator instance from your component.

Using the [ref](https://vuejs.org/v2/api/#ref) in your component

```html{2}
<VueTabulator ref="tabulator" v-model="data" :options="options" />
```

You have access to method <code>getInstance</code> who will return the Tabulator instance.

```javascript{1}
const tabulatorInstance = this.$refs.tabulator.getInstance();
tabulatorInstance.clearData();
```

::: warning be careful
When use the Tabulator instance will can broke some behaviors in the vue-tabulator. That can happening because the Tabulator is a JavaScript library and the vue-tabulator is a wrapper for that lib to more easyly use in vue.
:::
