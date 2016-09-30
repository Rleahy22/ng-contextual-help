var gulp    = require('gulp');
var connect = require('gulp-connect');
var eslint  = require('gulp-eslint');
var less    = require('gulp-less');
var path    = require('path');

gulp.task('less', function () {
  return gulp.src('./src/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./src'));
});

gulp.task('lint', function () {
    return gulp.src(['src/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('connect', function() {
    connect.server();
});
