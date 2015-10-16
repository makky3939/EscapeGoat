gulp = require 'gulp'
runSequence = require 'run-sequence'

gulp.task 'copy:bootstrap', ->
  gulp.src '../node_modules/bootstrap/dist/css/bootstrap.min.css'
    .pipe gulp.dest '../dst/assets'

gulp.task 'copy:image', ->
  gulp.src '../src/images/*'
    .pipe gulp.dest '../dst/assets/images'

gulp.task 'copy', ->
  runSequence ['copy:bootstrap', 'copy:image']
