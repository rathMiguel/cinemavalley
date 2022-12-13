'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const browserSync = require('browser-sync').create();
const cache = require('gulp-cached');

gulp.task('serve', ['pug','sass','coffee'], () => {
    let timer;
    browserSync.init({
      startPath: config.path.start,
      notify: false,
      ghostMode: false,
      server: {
        baseDir: config.path.output
      },
    }
  );
  gulp.watch(`${config.path.input}scss/**/*.scss`, ['sass']);
  gulp.watch(`${config.path.input}pug/**/*.pug`, ['pug']);
  gulp.watch(`${config.path.input}coffee/**/*.coffee`, ['coffee']);
  gulp.watch(`${config.path.input}images/**/*.+(jpg|jpeg|png|gif|svg)`, ['imagemin']);
  gulp.watch(`${config.path.output}**/*`).on('change', () => {
    clearTimeout(timer);
    timer = setTimeout(function () {
      browserSync.reload();
    }, 200);
  });
});

gulp.task('serve:stage', ['copy:stage'], () => {
    let timer;
    browserSync.init({
      proxy: config.path.proxy,
      startPath: config.path.start,
      notify: false,
      ghostMode: false,
      reloadDelay: 1000,
    }
  );
  gulp.watch(`${config.path.input}scss/**/*.scss`, ['sass:direct']);
  gulp.watch(`${config.path.input}coffee/**/*.coffee`, ['coffee:direct']);
  gulp.watch(`${config.path.release}**/*`, ['copy:stage']);
  gulp.watch(`${config.path.release}**/*`).on('change', () => {
    clearTimeout(timer);
    timer = setTimeout(function () {
      browserSync.reload();
    }, 1000);
  });
});

gulp.task('stage:copy', () => {
  gulp.src([
    `${config.path.release}**/*`,
    `!${config.path.release}png/**/*`,
    `!${config.path.release}Templates/**/*`
  ])
  .pipe(cache('copyStage'))
  .pipe(gulp.dest(config.path.www));
});

gulp.task('serve:stage', ['stage:copy'], () => {
    let timer;
    browserSync.init({
      proxy: config.path.proxy,
      startPath: config.path.start,
      notify: false,
      ghostMode: false,
      reloadDelay: 1000,
    }
  );
  gulp.watch(`${config.path.input}pug/**/*.pug`, ['change']);
  gulp.watch(`${config.path.input}scss/**/*.scss`, ['css:optimize']);
  gulp.watch(`${config.path.input}coffee/**/*.coffee`, ['coffee']);
  gulp.watch(`${config.path.release}**/*`, ['stage:copy']);
  gulp.watch(`${config.path.release}**/*`).on('change', () => {
    clearTimeout(timer);
    timer = setTimeout(function () {
      browserSync.reload();
    }, 1000);
  });
});
