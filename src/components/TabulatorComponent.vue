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
import { IntegrationOptions, UpdateStrategy } from '@/types';

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

  @Prop({ default: () => ({ updateStrategy: UpdateStrategy.DATA }) })
  private integration?: IntegrationOptions;

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

  @Watch('options', { deep: true })
  private updateOptions() {
    this.resolvedOptions = {
      ...this.options,
      data: this.tableData,
    };

    this.createTable();
  }

  @Watch('tableData', { deep: true })
  private updateData() {
    if (this.tabulatorInstance) {
      if (this.integration && this.integration.updateStrategy === UpdateStrategy.REPLACE) {
        this.tabulatorInstance.replaceData(this.tableData);
      } else if (this.integration && this.tableData
      && this.integration.updateStrategy === UpdateStrategy.UPDATE) {
        this.tabulatorInstance.updateData(this.tableData);
      } else {
        this.tabulatorInstance.setData(this.tableData);
      }
    }
  }

  mounted() {
    this.updateOptions();
  }
}
</script>
