/*************************************/
 




// gulp.task('jquery:copy', ['bower'], function(cb) {
//   return gulp.src('bower_components/jquery/dist/jquery.min.js')
//     .pipe(gulp.dest('public/assets/scripts/vendor'));
// });

// gulp.task('foundationScripts:copy', ['jquery:copy'], function(cb) {
//   return gulp.src('bower_components/foundation/js/foundation.min.js')
//     .pipe(gulp.dest('public/assets/scripts/vendor'));
// });


// gulp.task('foundationScss:copy',  ['foundationScripts:copy'], function(cb) {
//   return gulp.src('bower_components/foundation/scss/**/*.scss')
//     .pipe(gulp.dest('source/scss/vendor'));
// });

/**************************/


gulp.task('foundationScripts:copy', ['jquery:copy'], function(cb) {
  return gulp.src('bower_components/foundation-sites/dist/js/foundation.min.js')
    .pipe(gulp.dest('public/assets/scripts/vendor/foundation'));
});

gulp.task('foundationScriptsPlugins:copy', ['foundationScripts:copy'], function(cb) {
  return gulp.src('bower_components/foundation-sites/dist/js/plugins/*.min.js')
    .pipe(gulp.dest('public/assets/scripts/vendor/foundation/plugins'));
});


gulp.task('foundationStylesVendor:copy',  ['foundationScriptsPlugins:copy'], function(cb) {
  return gulp.src('bower_components/foundation-sites/_vendor/**/*.scss')
    .pipe(gulp.dest('source/scss/vendor/foundation/_vendor'));
});

gulp.task('foundationStylesScss:copy',  ['foundationStylesVendor:copy'], function(cb) {
  return gulp.src('bower_components/foundation-sites/scss/**/*.scss')
    .pipe(gulp.dest('source/scss/vendor/foundation/scss'));
});

gulp.task('foundationStylesAssets:copy',  ['foundationStylesScss:copy'], function() {
  return gulp.src('bower_components/foundation-sites/assets/*.scss')
    .pipe(gulp.dest('source/scss/vendor/foundation/assets'));
});


if(config.cmsName != "drupal") {
  gulp.task('jquery:copy', function(cb) {
    return gulp.src('bower_components/jquery/dist/jquery.min.js')
      .pipe(gulp.dest('public/assets/scripts/vendor'));
  });
  gulp.task('modernizr:copy', function() {
    return gulp.src('bower_components/modernizr/modernizr.scss')
      .pipe(gulp.dest('public/assets/scripts/vendor'));
  });

  gulp.task('copy', [
    'foundationScripts:copy',
    'foundationScriptsPlugins:copy',
    'foundationStylesVendor:copy',
    'foundationStylesScss:copy',
    'foundationStylesAssets:copy'
  ]);
} else {
  gulp.task('copy', [
    'jquery:copy', 
    'foundationScripts:copy',
    'foundationScriptsPlugins:copy',
    'foundationStylesVendor:copy',
    'foundationStylesScss:copy',
    'foundationStylesAssets:copy'
  ]);
}

gulp.task('del', ['foundationScss:copy'], function() {
  del('bower_components').then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});

gulp.task('deploy', ['bower', 'jquery:copy', 'foundationScripts:copy', 'foundationScss:copy', 'del']);


// gulp.task('slickScripts:copy', function() {
//   return gulp.src('bower_components/slick-carousel/slick/slick.min.js')
//     .pipe(gulp.dest('public/assets/scripts/vendor'));
// });

// gulp.task('slickScss:copy', function() {
//   return gulp.src('bower_components/slick-carousel/slick/*.scss')
//     .pipe(gulp.dest('source/scss/vendor'));
// });