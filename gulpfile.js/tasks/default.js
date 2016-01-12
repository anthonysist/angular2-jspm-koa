'use strict';

let gulp = require('gulp');
let jspm = require('jspm');

/*Typescript compilation with jspm*/
gulp.task('typescript', function(){
    jspm.setPackagePath('.');
        jspm.bundleSFX('src/boot.ts', 'dist/app.js', { mangle: false }).then(function() {
    });
});

gulp.task('default',['typescript', 'server']);
