'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const ext = require('gulp-ext-replace');

// change html => dwt
gulp.task(`change:tmpl` , () => {
  return gulp.src(`${config.path.output}Templates/*.html`)
  .pipe(ext(`.dwt`))
  .pipe(gulp.dest(`${config.path.release}Templates/`));
});

// change html => txt
gulp.task(`change:txt` , () => {
  return gulp.src([
    `${config.path.output}cgi-bin/**/mail.html`,
    `${config.path.output}cgi-bin/**/reply.html`
    ],{base: 'dev/'})
  .pipe(ext(`.txt`))
  .pipe(gulp.dest(config.path.release));
});

// change html => php
gulp.task(`change:php` , ['pug'], () => {
	// ▼CMSになる部分は除外すること
  return gulp.src([`${config.path.output}parts/**/*`])
  .pipe(ext(`${config.general.ext}`))
  .pipe(gulp.dest(`${config.path.release + config.path.theme}`));
});

// gulp.task('change', ['change:tmpl', 'change:txt', 'change:php']);
gulp.task('change', ['change:php']);