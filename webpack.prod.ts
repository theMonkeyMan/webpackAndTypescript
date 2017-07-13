import * as webpack from 'webpack';

//整合webpack-html的插件
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

import webpackConfig from './webpack.config';

let includePlugins = [
    //压缩webpack生成的文件,减少http流量压力
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        },
        sourceMap: false
    } as any),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify("production")
    }),
    //webpack-html解决方案
    new HtmlWebpackPlugin({
        //引入index chunk
        chunks: ['index', 'vendor', 'others'],
        //指定引入chunk文件的html文件
        filename: '../index.html',
        //html文件的模板格式文件
        template: './src/tpl/index.prod',
        inject: true
    }),
];

includePlugins.forEach((item, index) => {
    webpackConfig.plugins.push(item);
});

module.exports = webpackConfig;