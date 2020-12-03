const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');

gulp.task('clean', () => del('dist'));

gulp.task('copy', () => gulp.src('src/index.html').pipe(gulp.dest('dist')));

gulp.task('css', () =>
  gulp
    .src(['src/css/normalize.css', 'src/css/style.css'])
    .pipe(concat('style.css'))
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
);

gulp.task('javascript', () =>
  gulp
    .src(['src/js/courses.js', 'src/js/script.js'])
    .pipe(concat('main.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
);

gulp.task('images', () =>
  gulp.src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'))
);

gulp.task(
  'default',
  gulp.series('clean', gulp.parallel('copy', 'css', 'javascript', 'images'))
);
