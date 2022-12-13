'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const coffee = require('gulp-coffee');
const concat = require("gulp-concat");

const plumber  = require('gulp-plumber');
const notify = require("gulp-notify");

gulp.task('coffee', ['coffee:modules'], () => {
  return gulp.src(`${config.path.input}coffee/*.coffee`)
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(coffee({bare:true}))
    .pipe(gulp.dest(config.path.output + config.path.js))
    .pipe(gulp.dest(config.path.release + config.path.theme + config.path.js));
});

gulp.task('coffee:modules', () => {
  let source = [];
  for (var value in config.coffee.modules) {
    source.push(`${config.path.input}coffee/modules/${config.coffee.modules[value]}.coffee`)
  }

  return gulp.src(source)
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(coffee({bare:true}))
    .pipe(concat('lib.js'))
    .pipe(gulp.dest(config.path.output + config.path.js))
    .pipe(gulp.dest(config.path.release + config.path.theme + config.path.js));
});