var gulp     = require('gulp');
var connect  = require('gulp-connect');
var eslint   = require('gulp-eslint');

gulp.task('lint', function () {
    return gulp.src(['src/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('connect', function() {
    connect.server();
});
