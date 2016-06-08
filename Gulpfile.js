var gulp     = require('gulp');
var concat   = require('gulp-concat');
var connect  = require('gulp-connect');
var eslint   = require('gulp-eslint');


gulp.task('lint', function () {
    return gulp.src(['src/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build', function() {
    gulp.src(['src/*.js', '!src/*.spec.js'])
        .pipe(concat('ngContextualHelp.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
    connect.server();
});
