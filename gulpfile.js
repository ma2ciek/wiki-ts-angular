/// <reference path="typings/node/node.d.ts" />

var gulp = require('gulp');
var path = require('path');

var clean = require('gulp-clean');
var typescript = require('gulp-typescript');
var less = require('gulp-less');

gulp.task('compileLess', function() {
    return gulp.src('./src/less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes')]
    }))
            .pipe(gulp.dest('./build/css'));
});

gulp.task('compileTs', function() {
    return gulp.src('./src/ts/*.ts')
        .pipe(typescript({
            out: 'output.js'
    }))
            .pipe(gulp.dest('./build/js'));
});

gulp.task('default', ['compileTs', 'compileLess']);