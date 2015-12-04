gulp        = require 'gulp'
runSequence = require 'run-sequence'
requireDir  = require 'require-dir'

requireDir './tasks'

gulp.task 'build', ->
  defaultTasks = ['copy', 'jade', 'js', 'sass']
  runSequence 'clean', defaultTasks

gulp.task 'watch', ->
  gulp.watch './../src/index.jade', ['jade']
  gulp.watch ['./../src/index.js', './../src/**/*.js'], ['js']
  gulp.watch './../src/index.sass', ['sass']
  gulp.watch './../src/images/*', ['copy']

gulp.task 'server', ->
  runSequence 'build', 'connect', 'watch'

gulp.task 'test', ->
  runSequence 'build'
