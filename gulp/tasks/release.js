'use strict';

const gulp = require('gulp');

gulp.task('release', ['css:optimize', 'change']);
// gulp.task('release', ['css:optimize', 'copy', 'change']);