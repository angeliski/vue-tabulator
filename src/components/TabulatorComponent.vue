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
import joint from '../utilities/joint'
const Tabulator = require('tabulator-tables');

@Component({
  name: 'TabulatorComponent',
})
export default class TabulatorComponent extends Vue {
  @Model('change', { default: () => [] })
  public tableData?: Array<any>;

  private tabulatorInstance: Tabulator | null = null;

  get eventOptions(): object { 
    const vm = this
    return {
      rowClick: function(e: Event, row: Tabulator.RowComponent) {
        console.log('defaults this',this,'vm',vm,e,row)
        vm.$emit('row-click',e,row)
      },
      rowDblClick: function(e: Event, row: Tabulator.RowComponent) {
        vm.$emit('row-dbl-click',e,row)
      },
      rowContext: function(e: Event, row: Tabulator.RowComponent) {
        vm.$emit('row-context',e,row)
      },
      rowTap: function(e: Event, row: Tabulator.RowComponent) {
        vm.$emit('row-tap',e,row)
      },
      rowDblTap: function(e: Event, row: Tabulator.RowComponent) {
        vm.$emit('row-dbl-tap',e,row)
      },
      rowMouseEnter: function(e: Event, row: Tabulator.RowComponent) {
        vm.$emit('row-mouse-enter',e,row)
      },
      rowMouseLeave: function(e: Event, row: Tabulator.RowComponent) {
        vm.$emit('row-mouse-leave',e,row)
      },
      rowMouseOver: function(e: Event, row: Tabulator.RowComponent) {
        vm.$emit('row-mouse-over',e,row)
      },
      rowMouseOut: function(e: Event, row: Tabulator.RowComponent) {
        vm.$emit('row-mouse-out',e,row)
      },
      rowMouseMove: function(e: Event, row: Tabulator.RowComponent) {
        vm.$emit('row-mouse-move',e,row)
      },
      rowAdded: function(row: Tabulator.RowComponent) {
        vm.$emit('row-added',row)
      },
      rowUpdated: function(row: Tabulator.RowComponent) {
        vm.$emit('row-updated',row)
      },
      rowDeleted: function(row: Tabulator.RowComponent) {
        vm.$emit('row-deleted',row)
      },
      rowMoved: function(row: Tabulator.RowComponent) {
        vm.$emit('row-moved',row)
      },
      rowResized: function(row: Tabulator.RowComponent) {
        vm.$emit('row-resized',row)
      },
    }
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
    const vm = this
    function customMergeFn(objValue: any, srcValue: any, key: string): any | undefined {
      if (typeof objValue == "function" && typeof srcValue == "function") {
        return joint([objValue, srcValue])
      }
    }

    this.resolvedOptions = {
      ...mergeWith(this.eventOptions, this.options, customMergeFn),
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
