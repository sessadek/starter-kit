module.exports = function(gulp, plugins, config) {
	gulp.task('imagemin', function () {
	  return gulp.src(config.images.src)
	    .pipe(plugins.changed(config.images.dest))
	    .pipe(plugins.imagemin([
	      plugins.imagemin.gifsicle({interlaced: true}),
	      plugins.imagemin.jpegtran({progressive: true}),
	      plugins.imagemin.optipng({optimizationLevel: 5}),
	      plugins.imagemin.svgo({plugins: [{removeViewBox: true}]})
	    ]))
	    .pipe(gulp.dest(config.images.dest));
	});
};