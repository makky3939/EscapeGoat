gulp           = require 'gulp'
gulpReact      = require 'gulp-react'
babelify       = require 'babelify'
gulpBrowserify = require 'gulp-browserify'
gulpPlumber    = require 'gulp-plumber'

gulp.task 'jsx', ->
  gulp.src '../src/index.jsx'
    .pipe gulpPlumber
      errorHandler: (err) ->
        console.log err
        this.emit 'end'
    .pipe gulpBrowserify
      insertGlobals: true
      transform: ['babelify']
    .pipe gulpReact()
    .pipe gulpPlumber.stop()
    .pipe gulp.dest '../dst/assets'
