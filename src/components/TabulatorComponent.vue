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
import mergeWith from 'lodash.mergewith'
import merge from '../utilities/merge'
const Tabulator = require('tabulator-tables');
import eventFactory from '../feature/event-factory'
import cellEvents from '../feature/events/cell-events'
import rowEvents from '../feature/events/row-events'

@Component({
  name: 'TabulatorComponent',
})
export default class TabulatorComponent extends Vue {
  @Model('change', { default: () => [] })
  public tableData?: Array<any>;

  private tabulatorInstance: Tabulator | null = null;

  get eventOptions(): Object {
    const events = eventFactory.bind(this)
    return {...events(rowEvents), ...events(cellEvents)}
  }

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
      ...mergeWith(this.eventOptions, this.options, merge),
      data: this.tableData,
    };

    this.createTable();
  }

  @Watch('tableData', { deep: true })
  private updateData() {
    if (this.tabulatorInstance) {
      if (this.integration && this.integration.updateStrategy === UpdateStrategy.REPLACE) {
        this.tabulatorInstance.replaceData(this.tableData);
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
