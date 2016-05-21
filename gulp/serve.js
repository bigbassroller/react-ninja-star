var gulp = require('gulp');
var cp = require('child_process');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var nodemon = require('gulp-nodemon');
var rename = require('gulp-rename');
/**
 * API Server (Database)
 */

gulp.task('restore-database', function() {
  return gulp.src('./data/restore.json')
    .pipe(rename('db.json'))
    .pipe(gulp.dest('./data'));
});

gulp.task('serve:api', ['restore-database'], function(done) {
  cp.exec('node_modules/.bin/json-server --watch ./data/db.json --port 3001', {stdio: 'inherit'})
    .on('close', done);
});


/**
 * Node Server (Express)
 */

gulp.task('serve:node', function(done) {
  nodemon({
    exec: './node_modules/.bin/babel-node ./server.js',
    watch: ['server.js'],
    ext: 'js html'
  });
});