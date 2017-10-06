module.exports = function(gulp, plugins, buffer, config) {
  gulp.task('sprites', function () {
    var spriteData = gulp.src(config.sprites.srcImg).pipe(plugins.spritesmith({
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      cssTemplate: config.sprites.tpl,
      algorithm: 'binary-tree',
      padding: 5
    }));
    spriteData.img
      .pipe(buffer())
      .pipe(plugins.imagemin())
      .pipe(gulp.dest(config.sprites.destImg));
    spriteData.css.pipe(gulp.dest(config.sprites.destScss));
  });
};