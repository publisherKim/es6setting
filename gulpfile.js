const gulp = require('gulp');
// gulp dependency write
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
    // gulp work write
    // Node Source
    gulp.src(['es6/**/*.js', 'public/es6/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
    gulp.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
    // Browser Source
    gulp.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/dist'));
});