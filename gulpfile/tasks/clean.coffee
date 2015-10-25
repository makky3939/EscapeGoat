gulp   = require 'gulp'
rimraf = require 'rimraf'

gulp.task 'clean', (cb)->
  rimraf '../escapegoat', cb
