const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    const tabulator = {
      'tabulator-tables': {
        commonjs: 'tabulator-tables',
        commonjs2: 'tabulator-tables',
        amd: 'tabulator-tables',
        root: 'Tabulator',
      },
    };

    config.merge({
      externals: process.env.NODE_ENV === 'production' ? tabulator : [],
    });
  },
  configureWebpack: {
    plugins: [new CopyWebpackPlugin([{ from: 'src/scss', to: 'scss' }])],
  },
};
