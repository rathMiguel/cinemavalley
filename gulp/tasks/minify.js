'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const pleeease = require('gulp-pleeease');
const concat = require('gulp-concat');

const uglify = require('gulp-uglify');

gulp.task('css:minify', ['css:optimize'], () => {
    return gulp.src([
      `${config.path.output + config.path.css}vendor.css`,
      `${config.path.output + config.path.css}style.css`
    ])
    .pipe(pleeease({
      minifier: true,
      autoprefixer: {
        browsers: config.prefix
      },
      mqpacker: ({
        sort: true
      }),
    }))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest(`${config.path.release + config.path.theme + config.path.css}`));
});

gulp.task('js:minify', ['coffee'], () => {
    return gulp.src([
      `${config.path.output + config.path.js}vendor.js`,
      `${config.path.output + config.path.js}lib.js`,
      `${config.path.output + config.path.js}script.js`
    ])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(`${config.path.release + config.path.theme + config.path.js}`));
});

gulp.task('minify', ['css:minify','js:minify']);