const Path = require('path')

module.exports = [
    {
        context: Path.join(__dirname, 'src/ts'),
        entry: './test.ts',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }
            ]
        },
        output: {
            filename: 'bundle.js',
            path: Path.resolve(__dirname, 'dist'),
        },
    },
];
