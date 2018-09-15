const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/js/index.js', './src/sass/styles.scss'],
    output: {
        path: path.resolve(__dirname, 'dist '),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist    '
    },
    devtool: 'source-map',
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new miniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "styles.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
            }
        ]
    }
}