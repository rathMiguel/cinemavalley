'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const sass = require('gulp-sass');
const plumber  = require('gulp-plumber');
const notify = require("gulp-notify");

const sourcemaps = require('gulp-sourcemaps');
const pleeease = require('gulp-pleeease');

// Settings =============================

const sassSettings = {
  outputStyle: 'expanded',
  sourcemap: true
}

const pleeeaseSettings = {
  minifier: false,
  autoprefixer: {
      browsers: config.prefix
  },
  mqpacker: ({
      sort: true
  }),
}

// ======================================

gulp.task('sass', () => {
  return gulp.src(`${config.path.input}scss/**/*.scss`)
  .pipe(sourcemaps.init())
  .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
  .pipe(sass(sassSettings))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(`${config.path.output + config.path.css}`));
});

gulp.task('css:optimize', ['sass'],() => {
  return gulp.src(`${config.path.output + config.path.css}*.css`, {base: './dev/'})
  .pipe(pleeease(pleeeaseSettings))
  .pipe(gulp.dest(config.path.release + config.path.theme));
});

