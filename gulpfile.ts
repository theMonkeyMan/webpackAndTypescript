import * as gulp from 'gulp';

import * as gulpUtil from 'gulp-util';

import * as webpack from 'webpack';

function buildWebpack(webpackConfig,cb){
    return webpack(webpackConfig, function (err, stats) {
        if (err) {
            throw new gulpUtil.PluginError('webpack', err)
        }
        gulpUtil.log('[webpack]', stats.toString({
            colors: true,
            chunks: false
        }));
        cb();
    });
}

gulp.task('webpack-prod', function (cb) {
    let webpackConfig = require('./webpack.prod');
    return buildWebpack(webpackConfig,cb);
});

gulp.task('webpack-dev', function (cb) {
    let webpackConfig = require('./webpack.dev');
    return buildWebpack(webpackConfig,cb);
});

gulp.task('build', ['webpack-prod']);

gulp.task('dev',['webpack-dev']);