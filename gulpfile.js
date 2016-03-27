var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;
elixir.config.assetsDir = "app/";
elixir.config.registerWatcher("copy",       "app/fonts/**/*");
elixir.config.registerWatcher("scss",       "app/components/**/*.scss");
elixir.config.registerWatcher("imagemin",   "app/img/**/*");
elixir.config.registerWatcher("uglify",     "public/js/*.js");
elixir.config.registerWatcher("htmlmin",    ["app/components/**/*.html", "app/index.html"]);

require("./elixir-tasks");

elixir(function(mix) {
    mix
        .copy([
            'node_modules/bootstrap/dist/fonts',
            'app/fonts'
        ], 'public/fonts')

        .scss([
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'app/components/**/*.scss'
        ], 'public/css', 'app.css')

        .concat([
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',   
            'node_modules/angular2/bundles/angular2-polyfills.min.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/rxjs/bundles/Rx.min.js',
        	'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/angular2/bundles/angular2.dev.js',
            'node_modules/angular2/bundles/router.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
    	], 'public/js', 'libs.js')

        .uglify('public/js/*.js', 'public/js')
        .htmlmin('app/**/*.html', 'public')
        .imagemin('app/img/**/*', 'public/img');
});