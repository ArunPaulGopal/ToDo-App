var gulp = require('gulp');
var csso = require('gulp-csso');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');

gulp.task('default', function(){
    nodemon({
        script:'express.js'
    })
    .on('start',['test'])
})

gulp.task('test', function(){
    return gulp.src('app.spec.js').pipe(mocha())
})

gulp.task('dev', function(){
  nodemon({
      script:'app.js'
  })
  .on('start',['test'])
})
