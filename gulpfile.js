'use strict';

// Load plugins
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Watch files
function watch() {
    browserSync.init({
        server: {
            baseDir: './code',
            index: '/index.html',
        },
    });
    gulp.watch('code/**/*.css').on('change', browserSync.reload);
    gulp.watch('code/*.html').on('change', browserSync.reload);
}

// Export tasks
exports.watch = watch;