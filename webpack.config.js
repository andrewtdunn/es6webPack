module.exports = {
  entry: './script.js',
  output: {filename: 'bundle.js'},
  module: {
    loaders: [
        {test: /\.js/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/}
    ]
  }
}
