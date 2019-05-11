<template>
  <div
    ref="table"
    class="tabulator"
  />
</template>


<script lang='ts'>
import {
  Component, Prop, Vue, Watch, Model,
} from 'vue-property-decorator';

const Tabulator = require('tabulator-tables');

@Component({
  name: 'TabulatorComponent',
})
export default class TabulatorComponent extends Vue {
  @Model('change', { default: () => [] })
  public tableData?: Array<any>;

  private tabulatorInstance: Tabulator | null = null;

  @Prop({ default: () => ({}) })
  private options?: Tabulator.Options;

  private resolvedOptions: Tabulator.Options = {};

  public getInstance() {
    return this.tabulatorInstance;
  }

  private createTable() {
    this.tabulatorInstance = new Tabulator(
      this.$refs.table,
      this.resolvedOptions,
    );
  }

  @Watch('tableData')
  @Watch('options', { deep: true })
  private updateOptions() {
    this.resolvedOptions = {
      reactiveData: true,
      ...this.options,
      data: this.tableData,
    };

    this.createTable();
  }

  mounted() {
    this.updateOptions();
  }
}
</script>
