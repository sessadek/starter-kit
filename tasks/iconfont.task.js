module.exports = function(gulp, plugins, config) {
  gulp.task('iconfont', function(){
    return gulp.src(config.iconFont.src)
      .pipe(plugins.iconfont({
        fontName: 'pyxicom', // required
        formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available
        timestamp: runTimestamp, // recommended to get consistent builds when watching files
        normalize:true,
        fontHeight: 1001
      }))
      .on('glyphs', function(glyphs, options) {
        gulp.src(config.iconFont.tpl)
          .pipe(plugins.consolidate('lodash', {
            glyphs: glyphs,
            fontName: 'pyxicom', // required
            fontPath: config.iconFont.dest,
            className: 'pyxicom'
          }))
          .pipe(gulp.dest(config.iconFont.destScss));
      })
      .pipe(gulp.dest(config.iconFont.dest));
  });
}