const   gulp            = require('gulp'),
        sass            = require('gulp-sass'),
        concat          = require('gulp-concat'),
        notify          = require('gulp-notify'),
        autoprefixer    = require('gulp-autoprefixer');

gulp.task('sass', () => {
    return gulp.src(['src/scss/app.sass'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(autoprefixer())
        .pipe(gulp.dest('assets/style'))
        .pipe(notify(
            {
                title: "Compilation SASS/SCSS",
                message: "Les fichiers sass ont été compilés",
                icon: "src/iconNotify/check.png",
            }
        ))
});

gulp.task('dev', ['sass'], () => {
    gulp.watch('src/scss/*',['sass']);
});