gulp               = require 'gulp'
gulpConnect        = require 'gulp-connect'

gulp.task 'connect', ->
  gulpConnect.server
    root: '../dst',
    port: 5000,
    livereload: true,
    fallback: '../dst/index.html'
