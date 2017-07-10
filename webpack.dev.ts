import * as webpack from 'webpack';

import webpackConfig from './webpack.config';

let includePlugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify("development")
    }),
];

includePlugins.forEach((item,index)=>{
    webpackConfig.plugins.push(item);
});

//使用source-map
webpackConfig.devtool="source-map";

module.exports = webpackConfig;