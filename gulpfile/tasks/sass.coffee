gulp         = require 'gulp'
gulpRubySass = require 'gulp-ruby-sass'
gulpConnect  = require 'gulp-connect'

gulp.task 'sass', ->
  gulpRubySass '../src/index.sass', { style: 'expanded' }
    .pipe gulp.dest '../dst/assets'
    .pipe gulpConnect.reload()
