gulp          = require 'gulp'
gulpRubySass  = require 'gulp-ruby-sass'
gulpPleeease  = require 'gulp-pleeease'
gulpConnect   = require 'gulp-connect'

gulp.task 'sass', ->
  gulpRubySass '../src/index.sass', { style: 'expanded' }
    .pipe gulpPleeease
      autoprefixer:
        browsers: ['last 2 versions']
      ,
      minifier: true
    .pipe gulp.dest '../escapegoat/assets'
    .pipe gulpConnect.reload()
