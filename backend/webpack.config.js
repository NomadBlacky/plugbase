const Path = require('path')

module.exports = [
  {
    context: Path.join(__dirname, './src'),
    entry: './main.ts',
    target: 'node',
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        }
      ]
    },
    output: {
      filename: 'main.js',
      path: Path.resolve(__dirname, './build'),
    },
  },
]
