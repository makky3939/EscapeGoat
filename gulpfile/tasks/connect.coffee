gulp               = require 'gulp'
gulpConnect        = require 'gulp-connect'

gulp.task 'connect', ->
  gulpConnect.server
    root: '../',
    port: 5000,
    livereload: true,
    fallback: '../escapegoat/index.html'
