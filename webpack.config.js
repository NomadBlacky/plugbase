const Path = require('path');

module.exports = [
  {
    entry: './src/main.ts',
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules|vue\/src/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          },
        },
        {
          test: /\.vue?$/,
          loader: 'vue-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss/,
          use: [
            'style-loader',
            {
              loader: 'css-loader', options: { url: false },
            },
            'sass-loader'
          ]
        }
      ]
    },
    output: {
      filename: 'bundle.js',
      path: Path.resolve(__dirname, 'dist'),
      publicPath: '/assets'
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
];

