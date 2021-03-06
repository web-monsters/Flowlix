'use strict';

/**
 * @gulpfile
 */
const { src, watch, dest, series } = require('gulp');
const sass = require('gulp-sass');
const gulpConcat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const del = require('del');

function cleanBuild() {
    return del('dist/*');
}

function compileStyles() {
    return src('app/scss/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpConcat('main.css'))
        // .pipe(autoprefixer({
        //   cascade: true
        // }))
        .pipe(dest('dist/'))
}

function initServer() {
    browserSync.init({
        server: {
            baseDir: './',
        },
        notify: false,
        port: 3000,
        open: false,
    });
}

function watchFiles() {
    initServer();

    watch('app/scss/**/*.scss').on('change', series(compileStyles, browserSync.stream));
    watch('index.html').on('change', browserSync.reload);
}

exports.build = series(cleanBuild, compileStyles);
exports.watch = series(cleanBuild, compileStyles, watchFiles);