'use strict';

const YAML = require('js-yaml');
const fs = require('fs');

const gulp = require('gulp');
const config = require('../config').config;

const gutil = require( 'gulp-util' );
const ftp = require( 'vinyl-ftp' );

const ftpconfig  = YAML.safeLoad(fs.readFileSync('ftpconfig.yml', 'utf8'));

const browserSync = require('browser-sync').create();

gulp.task('deploy:copy', () => {

    let conn = ftp.create(ftpconfig.ftp);
    let globs = ftpconfig.globs;

    return gulp.src(globs, {base: 'public/', buffer: false })
    .pipe(conn.newer(ftpconfig.remotePath))
    .pipe(conn.dest(ftpconfig.remotePath));
});

gulp.task('deploy:reload', ['deploy:copy'], () => {
  browserSync.reload();
});

gulp.task('deploy', ['deploy:copy'], () => {
    browserSync.init({
      proxy: ftpconfig.domain,
      notify: false,
      startPath: ''
    }
  );
  gulp.watch("./src/pug/**/*.pug", ['change']);
  gulp.watch("./src/scss/**/*.scss", ['css:optimize']);
  gulp.watch("./src/coffee/**/*.coffee", ['coffee']);
  gulp.watch("./public/**/*", ['deploy:reload']);
});