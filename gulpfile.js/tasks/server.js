'use strict';

let gulp = require('gulp');

let nodemon = require('gulp-nodemon');

gulp.task('server', function() {
  nodemon({
    script: 'server.js',
    nodeArgs: ['--harmony']
  }).on('restart');
});

