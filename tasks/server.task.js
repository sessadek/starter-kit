module.exports = function(gulp, browserSync) {
	gulp.task('server', function () {
    // Serve files from the root of this project
    browserSync.init({
      server: {
        baseDir: "./public",
        directory: true
      }
    });
	});
};