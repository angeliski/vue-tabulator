<template>
  <div
    v-if="tabulatorInstance"
    ref="table"
    class="tabulator"
  />
</template>


<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import Tabulator from 'tabulator-tables';

@Component
export default class VueTabulator extends Vue {
  @Prop({ default: () => [] })
  public value?: Array<any>;

  @Prop({ default: () => [] })
  public tableData?: any[];

  private tabulatorInstance: any = {};

  @Prop({ default: () => ({}) })
  private options: any;

  private resolvedOptions: any = {};

  mounted() {
    this.resolvedOptions = {
      ...this.options,
      data: this.value,
    };

    this.tabulatorInstance = new Tabulator(
      this.$refs.table,
      this.resolvedOptions,
    );
  }
}
</script>


<style lang='scss'>
</style>
