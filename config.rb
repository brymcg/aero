require "lib/string_helpers"

set :css_dir,     'assets/css'
set :js_dir,      'assets/js'
set :images_dir,  'assets/images'

set :haml,        format: :html5, attr_wrapper: '"'

activate :directory_indexes
activate :relative_assets
set :relative_links, true

configure :development do
  activate :livereload, no_swf: true
  set :debug_assets, true
  set :sass, line_numbers: true
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :minify_html
  activate :gzip
  activate :asset_hash, :exts =>  %w(.css .gif .png .svg .jpg .jpeg .js)
  # # Only necessary when re-building from scratch or changing favicon
  # activate :favicon_maker, :icons => {
  #   "assets/images/icon-196^2.png" => [
  #     { icon: "apple-touch-icon-152x152-precomposed.png" },
  #     { icon: "apple-touch-icon-144x144-precomposed.png" },
  #     { icon: "apple-touch-icon-120x120-precomposed.png" },
  #     { icon: "apple-touch-icon-114x114-precomposed.png" },
  #     { icon: "apple-touch-icon-76x76-precomposed.png" },
  #     { icon: "apple-touch-icon-72x72-precomposed.png" },
  #     { icon: "apple-touch-icon-60x60-precomposed.png" },
  #     { icon: "apple-touch-icon-57x57-precomposed.png" },
  #     { icon: "apple-touch-icon-precomposed.png", size: "57x57" },
  #     { icon: "apple-touch-icon.png", size: "57x57" },
  #     { icon: "favicon-196x196.png" },
  #     { icon: "favicon-160x160.png" },
  #     { icon: "favicon-96x96.png" },
  #     { icon: "favicon-32x32.png" },
  #     { icon: "favicon-16x16.png" },
  #     { icon: "favicon.png", size: "16x16" },
  #     { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },
  #     { icon: "mstile-144x144", format: "png" },
  #   ]
  # }
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
end