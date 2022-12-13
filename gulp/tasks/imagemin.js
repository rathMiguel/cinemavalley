'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const imagemin = require('gulp-imagemin');
const pngquant  = require('imagemin-pngquant');
const mozjpeg  = require('imagemin-mozjpeg');

gulp.task("imagemin", function() {
    return gulp.src(`${config.path.input}images/**/*.+(jpg|jpeg|png|gif|svg)`)
    .pipe(imagemin([
       pngquant({
         quality: [.65, .8],
         speed: 1,
         floyd:0
       }),
       mozjpeg({
         quality:80,
         progressive: true
       }),
       imagemin.svgo(),
       imagemin.optipng(),
       imagemin.gifsicle()
     ]
  ))
  .pipe(gulp.dest(config.path.output));
});