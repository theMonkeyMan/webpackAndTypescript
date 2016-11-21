var path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js'
    },

    output: {
        path: path.resolve(__dirname, './dist/static'),
        publishPath: 'static/',
        filename: '[name].[chunkhash].js'
    },

    resolve: {
        extensions: ['', 'js', 'jsx', '.scss']
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', ['css'])
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', ['css', 'sass'])
            },
            {
                test: /\.html$/,
                loader: ExtractTextPlugin.extract('html')
            }
        ]
    },

    plugins: [

        new CleanWebpackPlugin(['dist/*'], {

        }),

        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: '../index.html',
            template: './src/tpl/index',
            inject: true
        }),

        new ExtractTextPlugin('[name].[chunkhash].css')
    ]
};