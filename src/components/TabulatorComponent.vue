<template>
  <div
    v-if="tabulatorInstance"
    ref="table"
    class="tabulator"
  />
</template>


<script lang='ts'>
import {
  Component, Prop, Vue, Watch, Model,
} from 'vue-property-decorator';
import Tabulator from 'tabulator-tables';

@Component({
  name: 'TabulatorComponent',
})
export default class TabulatorComponent extends Vue {
  @Model('change', { default: () => [] })
  public tableData?: Array<any>;

  private tabulatorInstance: any = {};

  @Prop({ default: () => ({}) })
  private options: any;

  private resolvedOptions: any = {};

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
