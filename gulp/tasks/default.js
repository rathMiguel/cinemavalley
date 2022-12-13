'use strict';

const gulp = require('gulp');
const config = require('../config').config;

gulp.task('default', ['serve'])
gulp.task('stage', ['serve:stage'])
