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
  name: 'VueTabulator',
})
export default class VueTabulator extends Vue {
  @Model('change', { default: () => [] })
  public tableData?: Array<any>;

  private tabulatorInstance: any = {};

  @Prop({ default: () => ({}) })
  private options: any;

  private resolvedOptions: any = {};

  public getInstance() {
    return this.tabulatorInstance;
  }

  @Watch('tableData', { deep: true })
  private createTable() {
    this.tabulatorInstance = new Tabulator(
      this.$refs.table,
      this.resolvedOptions,
    );
  }

  @Watch('options', { deep: true })
  private updateOptions() {
    this.resolvedOptions = {
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


<style lang='scss'>
</style>
