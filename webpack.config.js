module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'd3-utils',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env'],
      },
    }]
  },
  externals: {
    ramda: {
      root: 'R',
      commonjs2: 'ramda',
      commonjs: 'ramda',
      amd: 'ramda'
    },
    d3: 'd3',
  }
}
