# Introduction


[Tabulator](http://tabulator.info/) is great because it's pure JavaScript, but sometimes when creating Vue apps we need a better, simple integration, like [reactive data](http://tabulator.info/docs/4.2/release#reactive-data), events, component editors and more.

How we can make Tabulator better?

Welcome Vue-Tabulator.

## Getting Started

Vue-tabulator is a wrapper to Tabulator, so you need to [install tabulator](http://tabulator.info/docs/4.2/install#sources-npm) to use vue-tabulator.

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
Then register the vue-tabulator plugin in your app's entry point:

```javascript
import Vue from 'vue';
import VueTabulator from 'vue-tabulator';

Vue.use(VueTabulator);
```

::: tip Note
Importing the scss files is not required, but if you do, you should configure your project to compile to css.
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

The v-model and options are required, and can be used to pass the contents of table and the configuration, respectively.
You can change the component name on plugin install:

```javascript
import Vue from 'vue';
import VueTabulator from 'vue-tabulator';

Vue.use(VueTabulator, {
    name: 'AwesomeTable'
});
```
Or register the component locally: 


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

The options object can accept any [Tabulator options](http://tabulator.info/docs/4.2/options), which allows you to use the full power of Tabulator on start or configuration.
The only option that isn't allowed is [_data_](http://tabulator.info/docs/4.2/data#array-initial) because the data will be received in the v-model.

:::tip Watchers
The options object uses the Vue [watcher](https://vuejs.org/v2/guide/computed.html#Watchers), so if you update the configuration, the Tabulator will be recreated using the new config.
:::
:::warning Reactive options
The watcher from options will recreate the tabulator instance when the options is updated.
:::

## v-model

You can provide an array to populate your table, and the component will use the [data property](http://tabulator.info/docs/4.2/data#array-initial) to initialize the Tabulator. Any change performed in your v-model will be reflected in the component, using a Vue [watcher](https://vuejs.org/v2/guide/computed.html#Watchers) instead of [Tabulator reactivity](http://tabulator.info/docs/4.2/reactivity).

The Watcher will use the method [setData](http://tabulator.info/docs/4.2/data#array) to update your table. If you prefer, you can change the behavior with the integration option.

## Integration
The integration option can provide a custom experience when using vue-tabulator, 
providing a better way to control internal behavior.

### updateStrategy

The update strategy is responsible for how data is updated in the Tabulator instance. The default value is `DATA`.

- You can change the update strategy to `REPLACE` in order to use the method [setReplace](http://tabulator.info/docs/4.2/update#alter-replace).
- You can change the update strategy to `UPDATE` in order to use the method [updateData](http://tabulator.info/docs/4.2/update#alter-update).

```html
<VueTabulator 
        v-model="data" 
        :options="options" 
        :integration="{ updateStrategy: 'REPLACE' }" 
  />
```

::: warning Use update in editable tables
To avoid [problems](https://github.com/angeliski/vue-tabulator/issues/13) prefer use `UPDATE` strategy on editable tables
:::


## Advanced Interaction

In some cases you will need to use a feature provided by Tabulator, that is not supported by vue-tabulator. In that case, you can use the tabulator instance from your component.

By using the [ref](https://vuejs.org/v2/api/#ref) in your component:

```html{2}
<VueTabulator ref="tabulator" v-model="data" :options="options" />
```

You have access to the method `getInstance` which will return the Tabulator instance.

```javascript{1}
const tabulatorInstance = this.$refs.tabulator.getInstance();
tabulatorInstance.clearData();
```

::: warning Be careful
Using the Tabulator instance can break some behaviors in vue-tabulator.
:::
## Caveats
- [Tabulator reactivity](http://tabulator.info/docs/4.2/reactivity)

In development we expected some strange behaviors when activating the Tabulator Reactivity module. Since Vue has a [reactivity system](https://it.vuejs.org/v2/guide/reactivity.html), we believe it is not necessary to activate Tabulator reactivity.
