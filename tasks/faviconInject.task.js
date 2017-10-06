// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.

module.exports = function(gulp, realFavicon) {
  gulp.task('inject-favicon-markups', function() {
    return gulp.src([ 'public/index.html' ])
      .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
      .pipe(gulp.dest('public/assets'));
  });
}