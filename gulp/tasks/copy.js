'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const cache = require('gulp-cached');

gulp.task('copy:image', () => {
  gulp.src([
    `${config.path.output}**/*.+(jpg|jpeg|png|gif|svg)`,
    `!${config.path.output}test/**/*.+(jpg|jpeg|png|gif|svg)`
    ])
  .pipe(gulp.dest(`${config.path.release + config.path.theme}`));
});

gulp.task('copy:html', () => {

  gulp.src([
    `${config.path.output}cgi-bin/**/conf.html`,
    `${config.path.output}cgi-bin/**/error.html`,
    `${config.path.output}cgi-bin/**/thanks.html`
    ], {base: 'dev/'})
  .pipe(gulp.dest(config.path.release));

  gulp.src(`${config.path.output}parts/**/*`)
  .pipe(gulp.dest(`${config.path.release}parts/`));
});

gulp.task('copy:stage', () => {
  gulp.src([
    `${config.path.release}**/*`,
    `!${config.path.release}png/**/*`,
    `!${config.path.release}Templates/**/*`
  ])
  .pipe(cache('copyStage'))
  .pipe(gulp.dest(config.path.www));
});

gulp.task('copy', ['copy:image']);