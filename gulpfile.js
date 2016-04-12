var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;
elixir.config.registerWatcher("scss",       "app/components/**/*.scss");
elixir.config.registerWatcher("jsonmin",    "app/**/*.json");
elixir.config.registerWatcher("uglify",     "public/js/*.js");
elixir.config.registerWatcher("copy",       "assets/fonts/**/*");
elixir.config.registerWatcher("imagemin",   "assets/img/**/*");
elixir.config.registerWatcher("htmlmin",    ["app/components/**/*.html", "app/index.html"]);

require("./elixir-tasks");

elixir(function(mix) {
    mix
        .copy([
            'node_modules/bootstrap/dist/fonts',
            'assets/fonts'
        ], 'public/fonts')

        .scss([
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'app/components/**/*.scss'
        ], 'public/css', 'app.css')

        .concat([
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',   
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/angular2/bundles/angular2.dev.js',
            'node_modules/angular2/bundles/router.dev.js',
            'node_modules/angular2/bundles/http.dev.js',

            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
        ], 'public/js', 'libs.js')

        .uglify('public/js/*.js', 'public/js')
        .htmlmin('app/**/*.html', 'public')
        .jsonmin('app/**/*.json', 'public')
        .imagemin('assets/img/**/*', 'public/img');
});