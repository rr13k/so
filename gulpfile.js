const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('lib'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass'));