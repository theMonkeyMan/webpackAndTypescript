var gulp = require('gulp');

var gulpUtil = require('gulp-util');

var webpack = require('webpack');

var webpackConfig = require('./webpack.config.js');

gulp.task('webpack', function (cb) {
    return webpack(webpackConfig, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err)
        }
        gulpUtil.log('[webpack]', stats.toString({
            colors: true,
            chunks: false
        }));
        cb();
    });
});

gulp.task('build', ['webpack']);