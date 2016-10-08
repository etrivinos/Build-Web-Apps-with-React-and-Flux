var gulp = require('gulp');
var util = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('default', function(){
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if(file) util.log('Recompiling ' + file);

    return bundler
      .bundle()
      .on('error', util.log.bind(util, 'Browsefiry Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'))
  };

  build();
  bundler.on('update', build);

});
