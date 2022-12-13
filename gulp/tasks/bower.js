'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const inject = require('gulp-inject');
const bower = require('main-bower-files');
const filter = require('gulp-filter');

const concat = require('gulp-concat');

const del = require('del');

// concat JS Files
gulp.task('bower:insert', () => {
  gulp.src(`${config.path.input}scss/${config.css.main}`)
  .pipe(inject(
      gulp.src(bower(),{
        read: false,
        }),{
          starttag: '// inject:{{ext}}',
          endtag:   '// endinject',
          relative: true,
          transform: (filepath) => {
            return `@import "${filepath}";`;
        },
      }
    )
  )
  .pipe(gulp.dest(`${config.path.input}scss/`));
});

gulp.task('bower:concat', () => {
  let jsFilter = filter(['**/*.js']);
  let cssFilter = filter(['**/*.css']);

  gulp.src(bower({
      debugging: true
  }))
  .pipe(jsFilter)
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest(`${config.path.output + config.path.js}`))
  .pipe(gulp.dest(`${config.path.release + config.path.theme + config.path.js}`))

  gulp.src(bower({
      debugging: true
  }))
  .pipe(cssFilter)
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest(`${config.path.output + config.path.css}`))
  .pipe(gulp.dest(`${config.path.release + config.path.theme + config.path.css}`))
});

gulp.task('bower:copy', () => {
  let fontFilter = filter(['**/*.eot', '**/*.otf', '**/*.svg', '**/*.ttf', '**/*.otf', '**/*.woff', '**/*.woff2']);
  let imgFilter = filter(['**/*.png', '**/*.jpg', '**/*.gif']);

  gulp.src(bower({
      debugging: true
  }))
  .pipe(fontFilter)
  .pipe(gulp.dest(`${config.path.output + config.path.fonts}`))
  .pipe(gulp.dest(`${config.path.release + config.path.theme + config.path.fonts}`))

  gulp.src(bower({
      debugging: true
  }))
  .pipe(imgFilter)
  .pipe(gulp.dest(`${config.path.output + config.path.img}`))
  .pipe(gulp.dest(`${config.path.release + config.path.theme + config.path.img}`))
  
});

gulp.task('bower', ['bower:insert', 'bower:concat', 'bower:copy']);