import * as webpack from 'webpack';

let webpackConfig = require('./webpack.config');

let includePlugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify("development")
    }),
];

includePlugins.forEach((item,index)=>{
    webpackConfig.plugins.push(item);
});

module.exports = webpackConfig;