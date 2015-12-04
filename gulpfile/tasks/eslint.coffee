gulp        = require 'gulp'
gulpEslint  = require 'gulp-eslint'
gulpPlumber = require 'gulp-plumber'

gulp.task 'eslint', ->
  gulp.src ['../src/**/*.js']
    .pipe gulpPlumber
      errorHandler: (err) ->
        console.log err
        this.emit 'end'
    .pipe gulpEslint()
    .pipe gulpEslint.format()
    .pipe gulpEslint.failAfterError()
    .pipe gulpPlumber.stop()
