module.exports = {
  "projectName": "Boilerplate Pyxicom",
  "cmsName": "drupal",
  "host": "www.kit.dev",
  "themeColor": "#ffffff",
  "styles": {
    "src": "source/scss/local/**/*.scss",
    "dest": "public/assets/stylesheets/local"
  },
  "stylesVendor": {
    "src": "source/scss/vendor/foundation/assets/*.scss",
    "dest": "public/assets/stylesheets/vendor/foundation"

  },
  "scripts": {
    "src": ["source/scripts/*.js", "!source/scripts/*.min.js"],
    "dest": "public/assets/scripts"
  },
  "html": {
    "src": "./public/*.html"
  },
  "images": {
    "src": "source/images/*",
    "dest": "public/images"
  },
  "sprites": {
    "srcImg": "source/images/sprites/*.png",
    "tpl": "source/tpl/_sprite.scss.handlebars",
    "destImg": "public/images",
    "destScss": "source/scss/local/tools"
  },
  "favicon": {
    "src": "source/favicon/favicon.png",
    "dest": "public/medias/favicon"
  },
  "iconFont": {
    "src": ["source/icons/*.svg"],
    "tpl": "source/tpl/_iconfont.scss",
    "destScss": "public/assets/stylesheets/local",
    "dest": "public/assets/fonts/"
  },
  "browserList": ["> 2%", "last 2 versions", "ie >= 9"]
}