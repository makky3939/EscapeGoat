gulp = require 'gulp'

gulp.task 'copy', ->
  gulp.src '../node_modules/bootstrap/dist/css/bootstrap.min.css'
    .pipe gulp.dest '../dst/assets'
