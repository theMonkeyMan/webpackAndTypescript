import * as gulp from 'gulp';

import * as gulpUtil from 'gulp-util';

import * as webpack from 'webpack';

let webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function (cb) {
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
});

gulp.task('build', ['webpack']);