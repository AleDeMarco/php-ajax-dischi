// webpack.mix.js

let mix = require('laravel-mix');

mix.js('edit/script.js', 'js').sass('edit/style.scss', 'css')
  .options({
    processCssUrls: false
  });;
