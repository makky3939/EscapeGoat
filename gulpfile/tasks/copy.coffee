gulp = require 'gulp'
runSequence = require 'run-sequence'

gulp.task 'copy:libcss', ->
  terget = [
    '../node_modules/bootstrap/dist/css/bootstrap.min.css'
    '../node_modules/font-awesome/css/font-awesome.min.css'
  ]
  gulp.src terget
    .pipe gulp.dest '../dst/assets'

gulp.task 'copy:libfont', ->
  gulp.src '../node_modules/font-awesome/fonts/*'
    .pipe gulp.dest '../dst/fonts'

gulp.task 'copy:image', ->
  gulp.src '../src/images/*'
    .pipe gulp.dest '../dst/assets/images'

gulp.task 'copy', ->
  runSequence ['copy:libcss', 'copy:libfont', 'copy:image']
