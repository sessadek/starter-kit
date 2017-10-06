module.exports = function(gulp, plugins, config) {
	gulp.task('bower', function() {
	  return plugins.bower();
	});
};