module.exports = function(gulp, browserSync, config) {
	gulp.task('html', function() {
  	return gulp.src(config.html.src)
    	.pipe(browserSync.stream());
	});
};
