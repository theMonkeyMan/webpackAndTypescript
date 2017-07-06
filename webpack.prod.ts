import * as webpack from 'webpack';

let webpackConfig = require('./webpack.config');

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
];

includePlugins.forEach((item,index)=>{
    webpackConfig.plugins.push(item);
});

module.exports = webpackConfig;