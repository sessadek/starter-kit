// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).

module.exports = function(gulp, realFavicon, config, FAVICON_DATA_FILE) {
  gulp.task('favicon', function(done) {
    realFavicon.generateFavicon({
      masterPicture: config.favicon.src,
      dest: config.favicon.dest,
      iconsPath: '/',
      design: {
        ios: {
          pictureAspect: 'noChange',
          assets: {
            ios6AndPriorIcons: true,
            ios7AndLaterIcons: true,
            precomposedIcons: true,
            declareOnlyDefaultIcon: true
          }
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: 'noChange',
          backgroundColor: config.themeColor,
          onConflict: 'override',
          assets: {
            windows80Ie10Tile: true,
            windows10Ie11EdgeTiles: {
              small: true,
              medium: true,
              big: true,
              rectangle: true
            }
          }
        },
        androidChrome: {
          pictureAspect: 'noChange',
          themeColor: config.themeColor,
          manifest: {
            display: 'standalone',
            orientation: 'notSet',
            onConflict: 'override',
            declared: true
          },
          assets: {
            legacyIcon: true,
            lowResolutionIcons: true
          }
        },
        safariPinnedTab: {
          pictureAspect: 'silhouette',
          themeColor: config.themeColor
        }
      },
      settings: {
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: true
      },
      markupFile: FAVICON_DATA_FILE
    }, function() {
      done();
    });
  });
}