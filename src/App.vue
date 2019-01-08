<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <VueTabulator v-model="data" :options="options"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueTabulator from './components/VueTabulator.vue';

@Component({
  components: {
    VueTabulator,
  },
})
export default class App extends Vue {
  public data = [{ name: 'Teste' }];

  public options = {
    columns: [
      {
        title: 'Name',
        field: 'name',
        sorter: 'string',
        width: 200,
        editor: true,
      },
    ],
  };
}
</script>

<style lang="scss">
@import "./scss/bootstrap/tabulator_bootstrap4";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
