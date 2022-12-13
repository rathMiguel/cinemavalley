'use strict';

const gulp = require('gulp');
const config = require('../config').config;

const rename = require("gulp-rename");

//
// default scaffolding
//

gulp.task('scaffold:pug', () => {

  gulp.src([
    'tools/default/pug/**/*.pug',
    '!tools/default/pug/page.pug'
  ], {base:'tools/default/pug/'})
  .pipe(gulp.dest(`${config.path.input}pug/`))

  for (var value in config.scaffold.page) {
    gulp.src('tools/default/pug/page.pug')
    .pipe(rename(`${config.scaffold.page[value]}/index.pug`))
    .pipe(gulp.dest(`${config.path.input}pug/`))
  }

});

gulp.task('scaffold:coffee', () => {
  gulp.src('tools/default/coffee/**/*')
  .pipe(gulp.dest(`${config.path.input}coffee/`))
});

//
// vzone scaffolding
//

gulp.task('scaffold:vpug', () => {

  gulp.src([
    'tools/vzone/pug/index.pug',
    'tools/vzone/pug/modules/**/*.pug',
    'tools/vzone/pug/parts/**/*.pug',
    'tools/vzone/pug/base/**/*.pug',
    'tools/vzone/pug/Templates/**/*.pug'
  ], { base: 'tools/vzone/pug/' })
  .pipe(gulp.dest(`${config.path.input}pug/`))

  for (var value in config.scaffold.page) {
    gulp.src('tools/vzone/pug/page.pug')
    .pipe(rename(`${config.scaffold.page[value]}/index.pug`))
    .pipe(gulp.dest(`${config.path.input}pug/`))
  }

  for (var value in config.scaffold.blog) {
    gulp.src('tools/vzone/pug/blog.pug')
    .pipe(rename(`${config.scaffold.blog[value]}/index.pug`))
    .pipe(gulp.dest(`${config.path.input}pug/`))
    .pipe(rename(`${config.scaffold.blog[value]}/single.pug`))
    .pipe(gulp.dest(`${config.path.input}pug/`))
    .pipe(rename(`${config.scaffold.blog[value]}/category.pug`))
    .pipe(gulp.dest(`${config.path.input}pug/`))
  }

});

gulp.task('scaffold:vsass', () => {
  for (var value in config.scaffold.sass) {
    gulp.src('tools/vzone/scss/page.scss')
    .pipe(rename(`page_${config.scaffold.sass[value]}.scss`))
    .pipe(gulp.dest(`${config.path.input}scss/`))
  }
});

gulp.task('scaffold:vcoffee', () => {
  gulp.src('tools/vzone/coffee/**/*')
  .pipe(gulp.dest(`${config.path.input}coffee/`))
});

gulp.task('scaffold:wp', () => {
  for (var value in config.scaffold.wordpress) {
    gulp.src('./tools/wp-template/**/*')
    .pipe(gulp.dest(`${config.path.release + config.scaffold.wordpress[value]}/wp-content/themes/vz-template/`));
  }
});

gulp.task('scaffold:clipmail', () => {
  for (var value in config.scaffold.clipmail) {
    gulp.src('tools/clipmail/init.cgi')
    .pipe(gulp.dest(`${config.path.release}cgi-bin/${config.scaffold.clipmail[value]}-clipmail/`));
    
    gulp.src('tools/clipmail/tmpl/**/*')
    .pipe(gulp.dest(`${config.path.input}pug/cgi-bin/${config.scaffold.clipmail[value]}-clipmail/tmpl/`));
  }
});

gulp.task('scaffold:default', ['scaffold:coffee', 'scaffold:pug']);
gulp.task('scaffold:vzone', ['scaffold:clipmail', 'scaffold:vpug', 'scaffold:vsass', 'scaffold:vcoffee']);