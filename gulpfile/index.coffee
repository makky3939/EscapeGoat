gulp        = require 'gulp'
runSequence = require 'run-sequence'
requireDir  = require 'require-dir'

requireDir './tasks'

gulp.task 'build', ->
  defaultTasks = ['jade', 'jsx']
  runSequence 'clean', defaultTasks

gulp.task 'server', ->
  runSequence 'build', 'connect'
