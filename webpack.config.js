var path = require('path');

//webpack自带的api
var webpack = require('webpack');

//整合webpack-html的插件
var HtmlWebpackPlugin = require('html-webpack-plugin');

//文件内容提取插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//清除文件插件
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    //webpack入口文件配置
    entry: {
        index: './src/index.tsx'
    },

    //webpack输出文件配置
    output: {
        path: path.resolve(__dirname, './dist/static'),
        publishPath: 'static/',
        filename: '[name].[chunkhash].js'
    },

    //webpack模块引入规则
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
        //清空所有的dist文件夹下的文件夹以及文件
        new CleanWebpackPlugin(['dist/*'], {

        }),

        //webpack-html解决方案
        new HtmlWebpackPlugin({
            //引入index chunk
            chunks: ['index'],
            //指定引入chunk文件的html文件
            filename: '../index.html',
            //html文件的模板格式文件
            template: './src/tpl/index',
            inject: true
        }),
        
        //给css文件添加hash值,避免缓存
        new ExtractTextPlugin('[name].[chunkhash].css'),
        //压缩webpack生成的文件,减少http流量压力
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],

    resolve: {
        extensions: ['', '.scss', '.ts', '.tsx', '.json', ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    devtool: "source-map"

    //若使用一下的配置,则需要在html中使用script标签引入externals配置中设置的资源,否则webpack打包以后会提示相关的依赖对象不存在
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};