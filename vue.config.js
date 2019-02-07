const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
    plugins: [
      new CopyWebpackPlugin([{ from: 'src/scss', to: 'scss' }]),
    ],
  },
};
