'use strict';

/**
 * @gulpfile
 */
const { src, watch, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const gulpConcat = require('gulp-concat');
const browserify = require ("browserify");
const source = require ("vinyl-source-stream");
const babelify = require ('babelify');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const del = require('del');

function cleanBuild () {
    return del('dist/*');
}

function compileStyles () {
    return src('app/scss/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpConcat('main.css'))
        // .pipe(autoprefixer({
        //   cascade: true
        // }))
        .pipe(dest('dist/'))
}

function compileJs () {
    return browserify({
        entries: ['./app/js/index.js']
    })
        .transform(babelify.configure({
          presets : ['@babel/env']
        }))
        .bundle()
        .pipe(source('app.js'))
        .pipe(dest('dist/'))
}

function initServer () {
    browserSync.init({
        server: {
            baseDir: './',
        },
        notify: false,
        port: 3000,
        open: false,
    });
}

function watchFiles () {
    initServer();

    watch('app/scss/**/*.scss').on('change', series(compileStyles, browserSync.stream));
    watch('app/js/**/*.js').on('change', series(compileJs, browserSync.stream));

    watch('index.html').on('change', browserSync.reload);
}

exports.build = series(cleanBuild, parallel(compileStyles, compileJs));
exports.watch = series(cleanBuild, parallel(compileStyles, compileJs), watchFiles);