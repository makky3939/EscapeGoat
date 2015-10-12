gulp           = require 'gulp'
gulpReact      = require 'gulp-react'
gulpBrowserify = require 'gulp-browserify'
gulpPlumber    = require 'gulp-plumber'

gulp.task 'jsx', ->
  gulp.src '../src/index.jsx'
    .pipe gulpPlumber
      errorHandler: (err) ->
        console.log err
        this.emit 'end'
    .pipe gulpReact()
    .pipe gulpBrowserify
      insertGlobals: true
    .pipe gulpPlumber.stop()
    .pipe gulp.dest '../dst/assets'
