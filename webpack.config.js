const path = require('path');

module.exports = {
  entry: './spa1/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sp1.bundle.js'
  },
  module: {
    rules:[{
      test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }

    }]
  }
};