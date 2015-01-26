var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var data = {
  var1: "Hello, world from Handlebars!"
};

gulp.task('default', function() {
  console.log('Hello, world!');
  return gulp.src('*.txt')
    .pipe($.compileHandlebars(data))
    .pipe($.rename(function(path) {
      path.basename = path.basename.replace('.hbs', '')
    }))
    .pipe(gulp.dest('dist'));
});
