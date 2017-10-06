module.exports = function(gulp, psi, site) {
	// gulp.task('psi:desktop', function () {
	//   return psi(site, {
	//     nokey: 'true',
	//     // key: key,
	//     strategy: 'desktop',
	//   }).then(function (data) {
	//     console.log('Speed score: ' + data.ruleGroups.SPEED.score);
	//   });
	// });

	gulp.task('psi:desktop', function (cb) {
	  psi(site, {
	    nokey: 'true',
	    strategy: 'desktop'
	  }, cb);
	});
}