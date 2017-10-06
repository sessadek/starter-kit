module.exports = function(gulp, plugins, browserSync, config) {

  gulp.task('styles', ['sprites'], function () {
    return gulp.src(config.styles.src)
      .pipe(plugins.plumber({
        errorHandler: function(err) {
          plugins.notify.onError({
          title: "Gulp error in " + err.plugin,
          message:  err.toString()
          })(err);
          plugins.util.beep();
        }
      }))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sassLint({
        options: {
          configFile: '.scss-lint.yml'
        }
      }))
      .pipe(plugins.sassLint.format())
      .pipe(plugins.sassLint.failOnError())
      .pipe(plugins.sass({
        outputStyle: 'compressed'
      }).on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer({
        browsers: config.browserList,
        cascade: false
      }))
      .pipe(plugins.csscomb())
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(config.styles.dest))
      .pipe(browserSync.stream());
  });
}
