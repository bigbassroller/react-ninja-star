var path = require('path');
var gulp = require('gulp');
var newer = require('gulp-newer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('sass', function () {

    var bundleConfigs = [{
        entries: [
            './app/sass/variables.scss',
            './app/sass/bootstrap.scss',
            './app/sass/font-awesome.scss',
            './app/sass/custom.scss',
            // './app/sass/media-queries-helpers.scss',
            './app/sass/media-queries.scss'
        ],
        dest: './public/assets/css',
        outputName: 'style.css'
    }];

    return bundleConfigs.map(function (bundleConfig) {

        return gulp.src(bundleConfig.entries)
            .pipe(newer(path.join(bundleConfig.dest, bundleConfig.outputName)))
            .pipe(concat(bundleConfig.outputName))
            .pipe(sass({outputStyle: 'compressed'}))
            // .pipe(sass())
            .pipe(gulp.dest(bundleConfig.dest));
    });
});
