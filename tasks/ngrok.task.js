module.exports = function(gulp, ngrok, site) {
	gulp.task('ngrok', function(cb) {
		return ngrok.connect(3000, function (err, url) {
	    console.log('serving your tunnel from: ' + site);
	    cb();
		});
	});
}