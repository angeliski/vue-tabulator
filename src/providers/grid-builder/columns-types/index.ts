function mapTypes(requireComponent: any) {
  return requireComponent.keys().map((fileName: string) => {
    const componentConfig = requireComponent(fileName);
    return componentConfig.default || componentConfig;
  }).reduce((prev: any, next: any) => {
    const type = { ...prev };
    type[next.cellType] = next.build;
    return type;
  }, {});
}


// https://webpack.js.org/guides/dependency-management/#require-context
const types = require.context(
  './types',
  false,
  /ColumnType[\w-]+\.js$/,
);

export default mapTypes(types);
