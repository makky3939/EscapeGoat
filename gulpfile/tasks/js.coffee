gulp           = require 'gulp'
babelify       = require 'babelify'
gulpBrowserify = require 'gulp-browserify'
gulpPlumber    = require 'gulp-plumber'
gulpConnect    = require 'gulp-connect'
licensify      = require 'licensify'

gulp.task 'js', ->
  gulp.src '../src/index.js'
    .pipe gulpPlumber
      errorHandler: (err) ->
        console.log err
        this.emit 'end'
    .pipe gulpBrowserify
      insertGlobals: false
      transform: ['babelify']
      plugin: 'licensify'
    .pipe gulpPlumber.stop()
    .pipe gulp.dest '../escapegoat/assets'
    .pipe gulpConnect.reload()
