'use strict';

/**
 * @gulpfile
 */
const { src, watch, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const gulpConcat = require('gulp-concat');
const uglify = require ('gulp-uglifyjs');
const cssmin = require('gulp-cssmin');
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
        .pipe(autoprefixer({
            cascade: true
        }))
        .pipe(cssmin())
        .pipe(dest('dist/'))
}

function compileJs () {
    return src('app/js/index.js')
        .pipe(gulpConcat('main.js'))
        .pipe(uglify())
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
    watch('app/js/index.js').on('change', series(compileJs, browserSync.stream))
    watch('index.html').on('change', browserSync.reload);
}

exports.build = series(cleanBuild, parallel(compileJs, compileStyles));
exports.watch = series(cleanBuild, parallel(compileJs, compileStyles), watchFiles);