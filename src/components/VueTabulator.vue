<template>
  <div
    v-if="tabulatorInstance"
    ref="table"
    class="tabulator"
  />
</template>


<script lang='ts'>
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import Tabulator from 'tabulator-tables';

@Component({
  name: 'VueTabulator',
})
export default class VueTabulator extends Vue {
  @Prop({ default: () => [] })
  public value?: Array<any>;

  @Prop({ default: () => [] })
  public tableData?: any[];

  private tabulatorInstance: any = {};

  @Prop({ default: () => ({}) })
  private options: any;

  private resolvedOptions: any = {};

  @Watch('value', { deep: true })
  private createTable() {
    this.tabulatorInstance = new Tabulator(
      this.$refs.table,
      this.resolvedOptions,
    );
  }

  @Watch('options', { deep: true })
  updateOptions() {
    this.resolvedOptions = {
      ...this.options,
      data: this.value,
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
