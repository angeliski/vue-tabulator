import ColumnsTypes from './columns-types';

class GridColumnDef {
  static createColumns(columns: any, componentInstance: any) {
    return columns.map((column: any) => ColumnsTypes[column.cellType || 'DEFAULT'](column, componentInstance));
  }
}

class GridBuilderTabulator {
  static createOptions(options: any, componentInstance: any) {
    const { columnDefs: columns, layout = 'fitColumns', groupBy } = options;
    return {
      groupToggleElement: 'header',
      groupClosedShowCalcs: true,
      groupBy,
      layout,
      columns: GridColumnDef.createColumns(columns, componentInstance),
    };
  }
}

export default GridBuilderTabulator;
