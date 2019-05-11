const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  chainWebpack: config => {
    if(process.env.NODE_ENV === 'production') {
      // disable cache (not sure if this is actually useful...)
      config.module.rule("ts").uses.delete("cache-loader");

      config.module
        .rule('ts')
        .use('ts-loader')
        .loader('ts-loader')
        .tap(opts => {
          opts.transpileOnly = false;
          opts.happyPackMode = false;
          return opts;
        });

        const tabulator = {
          'tabulator-tables': {
            commonjs: 'tabulator-tables',
            commonjs2: 'tabulator-tables',
            amd: 'tabulator-tables',
            root: 'Tabulator',
          },
        };
    
        config.merge({
          externals: tabulator,
        });
    }
  },
  configureWebpack: config => {
    if(process.env.NODE_ENV === 'production') {
      config.module.rules.forEach(rule => {
        if (rule.use) {
          let idx = rule.use.findIndex(w => w.loader === 'thread-loader')
          if (idx !== -1) rule.use.splice(idx, 1)
        }
      })
    }
    // plugins: [new CopyWebpackPlugin([{ from: 'src/scss', to: 'scss' }])],
  },
};