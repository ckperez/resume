'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const clean = require('gulp-clean');
const sass = require('gulp-sass');

const paths = {
  js: __dirname + '/app/**/*.js',
  html: __dirname + '/app/**/*.html',
  css: __dirname + '/app/**/*.css'
};

gulp.task('clean', ()=>{
  return gulp.src('./build/**/*', {read:false})
    .pipe(clean());
});

gulp.task('copy-html', ['clean'], ()=>{
  return gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-css', ['clean', 'sass'], ()=>{
  return gulp.src(paths.css)
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle', ['clean'], ()=>{
  return gulp.src(paths.js)
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('wipe-css', ()=>{
  return gulp.src('./app/css/style.css', {read:false})
    .pipe(clean());
});

gulp.task('sass', ['clean'], ()=>{
  return gulp.src('./app/css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css/style.css'));
});

gulp.task('sass-watch', ()=>{
  gulp.watch('./app/css/**/*.scss', ['sass']);
});

gulp.task('bundle:test', ()=>{
  return gulp.src(__dirname + '/test/*_test.js')
    .pipe(webpack({
      output: {
        filename: 'test_bundle.js'
      }
    }))
    .pipe(gulp.dest(__dirname + '/test'));
});

gulp.task('watch', ()=>{
  gulp.watch('./app/*', ['build']);
});

gulp.task('build', ['clean', 'copy-html', 'copy-css', 'bundle']);

gulp.task('default', ['build']);
