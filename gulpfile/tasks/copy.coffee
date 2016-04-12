gulp = require 'gulp'
runSequence = require 'run-sequence'

gulp.task 'copy:libcss', ->
  terget = [
    '../node_modules/bootstrap/dist/css/bootstrap.css'
    '../node_modules/bootstrap/dist/css/bootstrap.css.map'
    '../node_modules/font-awesome/css/font-awesome.min.css'
  ]
  gulp.src terget
    .pipe gulp.dest '../escapegoat/assets'

gulp.task 'copy:libfont', ->
  gulp.src '../node_modules/font-awesome/fonts/*'
    .pipe gulp.dest '../escapegoat/fonts'

gulp.task 'copy:image', ->
  gulp.src '../src/images/*'
    .pipe gulp.dest '../escapegoat/assets/images'

gulp.task 'copy', ->
  runSequence ['copy:libcss', 'copy:libfont', 'copy:image']
