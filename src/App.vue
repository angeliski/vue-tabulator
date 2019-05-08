<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <VueTabulator
      v-model="data"
      :options="options"
    />

    <button
      id="update"
      @click="updateRow"
    >
      Update Row
    </button>

    <button
      id="row"
      @click="newRow"
    >
      New Row
    </button>
    <button
      id="column"
      @click="newColumn"
    >
      New Column
    </button>
    <button
      id="clear"
      @click="clear"
    >
      Clear Data
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueTabulator from './components/TabulatorComponent.vue';

@Component({
  components: {
    VueTabulator,
  },
})
export default class App extends Vue {
  public data = [{ name: 'Teste', age: 13 }];

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

  updateRow() {
    this.data[0].name = 'Name updated';
  }

  newRow() {
    this.data.push({ name: 'Teste 2', age: 15 });
  }

  newColumn() {
    this.options.columns.push({
      title: 'age',
      field: 'age',
      sorter: 'number',
      width: 300,
      editor: false,
    });
  }

  clear() {
    this.data = [];
  }
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
