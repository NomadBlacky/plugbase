const Path = require('path');

function resolve (dir) {
  return Path.join(__dirname, '..', dir)
}

module.exports = [
  {
    entry: './src/main.ts',
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          include: /src/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          },
        },
        {
          test: /\.vue?$/,
          exclude: /node_modules/,
          include: /src/,
          loader: 'vue-loader',
        },
        {
          test: /\.scss/,
          exclude: /node_modules/,
          include: /src/,
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
      path: resolve('dist'),
      publicPath: '/assets'
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    }
  },
];

