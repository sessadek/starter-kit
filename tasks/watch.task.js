module.exports = function(gulp, config) {
	gulp.task('watch', function() {
		gulp.watch(config.styles.src, ['styles']);
	  gulp.watch(config.html.src, ['html']);
	  gulp.watch(config.scripts.src, ['scripts']);
	  gulp.watch(config.images.src, ['imagemin']);
	});
};