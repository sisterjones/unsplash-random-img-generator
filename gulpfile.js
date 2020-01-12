var gulp = require('gulp')
var gulpSass = require('gulp-sass')

var componentFiles = './src/Components'
var givenComponentFile = './src/Components/**/*.scss'

gulp.task('components-scss', function () {
    return gulp.src(givenComponentFile)
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(gulp.dest(componentFiles));
    });

gulp.task('watch', function () {
  gulp.watch(givenComponentFile, gulp.series('components-scss'))
});