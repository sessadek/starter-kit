module.exports = function(gulp, psi, site) {
	// gulp.task('psi:mobile', function () {
	//   return psi(site, {
	//     // key: key
	//     nokey: 'true',
	//     strategy: 'mobile',
	//   }).then(function (data) {
	//     console.log('Speed score: ' + data.ruleGroups.SPEED.score);
	//     console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
	//   });
	// });

	gulp.task('psi:mobile', function (cb) {
	  psi(site, {
	    nokey: 'true',
	    strategy: 'mobile'
	  }, cb);
	});
}