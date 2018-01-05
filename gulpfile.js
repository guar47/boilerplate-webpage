const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

const paths = {
  html: ['*.html'],
  css: 'css',
  sass: ['css/*.scss'],
  js: ['js/script.js'],
};

gulp.task('js', () => gulp.src(paths.js)
  .pipe(browserSync.stream()));

gulp.task('html', () => gulp.src(paths.html)
  .pipe(browserSync.stream()));

gulp.task('sass', () => gulp.src(paths.sass)
  .pipe(sass())
  .pipe(gulp.dest(paths.css))
  .pipe(browserSync.stream()));

gulp.task('serve', ['sass', 'html', 'js'], () => {
  browserSync.init({
    server: './',
    open: false,
    notify: false,
  });

  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['serve']);
