module.exports = {
  "projectName": "Boilerplate Pyxicom",
  "cmsName": "drupal",
  "host": "www.kit.com",
  "themeColor": "#ffffff",
  "browserList": ["> 2%", "last 2 versions", "ie >= 9"],
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
    "src": "source/medias/images/*",
    "dest": "public/medias/images"
  },
  "sprites": {
    "srcImg": "source/images/sprites/*.png",
    "tpl": "source/tpl/_sprite.scss.handlebars",
    "destImg": "public/images",
    "destScss": "source/scss/local/utils"
  },
  "favicon": {
    "src": "source/medias/favicon/favicon.png",
    "dest": "public/medias/favicon",
    "srcFile": "source/medias/favicon/faviconData.json"
  },
  "iconFont": {
    "src": ["source/medias/icons/*.svg"],
    "tpl": "source/tpl/_iconfont.scss",
    "destScss": "source/scss/local/utils",
    "dest": "public/assets/fonts/"
  }
}