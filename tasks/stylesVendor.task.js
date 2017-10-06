module.exports = function(gulp, plugins, browserSync, config) {
  gulp.task('stylesVendor', function () {
    return gulp.src(config.stylesVendor.src)
      .pipe(plugins.plumber({
        errorHandler: function(err) {
          notify.onError({
          title: "Gulp error in " + err.plugin,
          message:  err.toString()
          })(err);
          gutil.beep();
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
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(config.stylesVendor.dest))
      .pipe(browserSync.stream());
  });
}