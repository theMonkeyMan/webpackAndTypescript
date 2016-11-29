var path = require('path');

var webpack = require('webpack');

var rootDir = `${__dirname}`;

//文件内容提取插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//清除文件插件
var CleanWebpackPlugin = require('clean-webpack-plugin');

//整合webpack-html的插件
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',

    output: {
        path: `${rootDir}/dist/`,
        publicPath: `${rootDir}/dist/`,
        filename: 'app.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "babel-preset-es2015",
                    ],
                    cacheDirectory: true,
                    plugins: ["transform-async-to-generator"]
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
        ]
    },

    plugins: [
        
    ],
    node: {
        fs: "empty"
    }
}