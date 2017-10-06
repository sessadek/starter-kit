'use strict';

/*************************************/

// var imagemin = require('gulp-imagemin');
// var changed = require('gulp-changed');
// var gutil = require('gulp-util');
// var plumber = require('gulp-plumber');
// var sass = require('gulp-sass');
// var sassLint = require('gulp-sass-lint');
// var sourcemaps = require('gulp-sourcemaps');
// var autoprefixer = require('gulp-autoprefixer');
// var notify = require("gulp-notify");
// var bower = require('gulp-bower');
// var newer = require('gulp-newer');
// var spritesmith = require('gulp.spritesmith');
// var uglify = require('gulp-uglify');
// var jshint = require('gulp-jshint');
// var rename = require("gulp-rename");

/*************************************/



var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var del = require('del');
var runSequence = require('run-sequence');
var plugins = require('gulp-load-plugins')();
var lodash = require('lodash');
var runTimestamp = Math.round(Date.now()/1000);
var realFavicon = require('gulp-real-favicon');
var fs = require('fs');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var ngrok = require('ngrok');

var psi = require('psi');
var site = "http://www.kit.dev";
var key = "";


/*************************************/

var config = require("./config");

/*************************************/

// File where the favicon markups are stored
var FAVICON_DATA_FILE = 'faviconData.json';

/*************************************/

require("./tasks/scripts.task")(gulp, plugins, browserSync, config);
require("./tasks/imagemin.task")(gulp, plugins, config);
require("./tasks/bower.task")(gulp, plugins, config);
require("./tasks/sprites.task")(gulp, plugins, buffer, config);
require("./tasks/styles.task")(gulp, plugins, browserSync, config);
require("./tasks/stylesVendor.task")(gulp, plugins, browserSync, config);
require("./tasks/html.task")(gulp, browserSync, config);
require("./tasks/favicon.task")(gulp, realFavicon);
require("./tasks/faviconInject.task")(gulp, realFavicon);
require("./tasks/faviconUpdate.task")(gulp, realFavicon);
require("./tasks/iconfont.task")(gulp, plugins);
require("./tasks/server.task")(gulp, browserSync);
require("./tasks/watch.task")(gulp, config);
require("./tasks/psi.desktop.task")(gulp, psi, site);
require("./tasks/psi.mobile.task")(gulp, psi, site);
require("./tasks/ngrok.task")(gulp, ngrok);

gulp.task('psi', function (cb) {
  return runSequence(
    'ngrok',
    'psi:desktop',
    // 'psi:mobile',
    cb
  );
});

gulp.task('default', ['styles', 'scripts', 'html', 'imagemin', 'watch', 'server']);