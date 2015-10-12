gulp         = require 'gulp'
gulpRubySass = require 'gulp-ruby-sass'

gulp.task 'sass', ->
  gulpRubySass '../src/index.sass', { style: 'expanded' }
    .pipe gulp.dest '../dst/assets'
