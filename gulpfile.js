var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('sass/*.scss')
               .pipe(sass())
               .pipe(cleanCSS())
               .pipe(gulp.dest('views/styles'));
});

gulp.task('default', function(){
    gulp.watch('sass/*.scss', ['sass']);
});