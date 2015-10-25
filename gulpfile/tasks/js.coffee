gulp           = require 'gulp'
gulpReact      = require 'gulp-react'
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
      insertGlobals: true
      transform: ['babelify']
      plugin: 'licensify'
    .pipe gulpReact()
    .pipe gulpPlumber.stop()
    .pipe gulp.dest '../escapegoat/assets'
    .pipe gulpConnect.reload()
