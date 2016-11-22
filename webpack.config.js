var path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.tsx'
    },

    output: {
        path: path.resolve(__dirname, './dist/static'),
        publishPath: 'static/',
        filename: '[name].[chunkhash].js'
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
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
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
    ],

    resolve: {
        extensions: ['', '.scss', '.ts', '.tsx', '.json', ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    devtool: "source-map"

    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};