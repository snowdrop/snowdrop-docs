'use strict';

var babel = require('gulp-babel');
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var del = require('del');
var concat = require('gulp-concat');
var es = require('event-stream');
var glob = require('glob');
var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var tap = require('gulp-tap');
var uglify = require('gulp-uglify');
var pump = require('pump');

var config = {
    dev: {
        es6: '_assets/js/**/*.js',
        es5: '_temp/js/'
    },
    prod: {
        es5: '_temp/',
        js: 'assets/js',
        bootstrap: 'assets/js/bootstrap/*.js',
        to_be_deleted: ['_temp/','assets/js/bootstrap/']
    }
}

gulp.task('es5-uglify', function (done) {
    return gulp.src(config.dev.es6, {read: false})
        // transform file objects using gulp-tap plugin
        //.pipe(tap(function (file) {
        //    gutil.log('bundling ' + file.path);
        //    // replace file contents with browserify's bundle stream
        //    file.contents = browserify(file.path, {debug: true})
        //        .transform(babelify, {presets: ["es2015"]})
        //        .bundle();
        //}))
        //.pipe(buffer())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.dev.es5));
});

gulp.task('compress', function (cb) {
    pump([
            gulp.src('_assets/js/*.js'),
            babel({
                presets: ['es2015']
            }),
            uglify(),
            rename({ suffix: '.min' }),
            gulp.dest('_temp/js/')
        ],
        cb
    );
});

gulp.task('move', function () {
    return gulp.src('_temp/js/**/*.js')
        .pipe(gulp.dest('assets/js'));
});

gulp.task('concat-bootstrap', function () {
    return gulp.src('_assets/js/bootstrap/*.js')
        .pipe(concat('bootstrap-4.0.0.alpha6.min.js'))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('clean', function () {
    return del(config.prod.to_be_deleted, {force: true}).then(paths => {
       gutil.log('Files and folders that would be deleted:\n', paths.join('\n'));
    });
});

// Sync tasks
gulp.task('build', function (callback) {
    runSequence('compress', 'move', 'concat-bootstrap', 'clean', callback);
});