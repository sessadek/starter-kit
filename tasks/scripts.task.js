module.exports = function(gulp, plugins, browserSync, config) {
  gulp.task('scripts', function() {
    return gulp.src(config.scripts.src)
      .pipe(plugins.plumber({
        errorHandler: function(err) {
          notify.onError({
          title: "Gulp error in " + err.plugin,
          message:  err.toString()
          })(err);
          plugins.gutil.beep();
        }
      }))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('jshint-stylish'))
      .pipe(plugins.rename({
        prefix: "jquery." + config.cmsName + ".",
        suffix: ".min"
      }))
      .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.stream());
  });
};