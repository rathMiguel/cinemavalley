'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const del = require('del');

gulp.task('clean', (cb) => {
  del(['./**/*.map', './**/*.LCK']);
});

gulp.task('reset', (cb) => {
  del('./dev/');
});

gulp.task('destroy', (cb) => {
  del('./www/');
});
