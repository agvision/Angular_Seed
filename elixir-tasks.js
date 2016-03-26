var argv          = require('yargs').argv;
var elixir        = require("laravel-elixir");
var gulp          = require("gulp");
var gulpif        = require("gulp-if");
var copy          = require("gulp-copy");
var uglify        = require('gulp-uglify');
var htmlmin       = require('gulp-htmlmin');
var imagemin      = require('gulp-imagemin');
var pngquant      = require('imagemin-pngquant');
var versionAppend = require('gulp-version-append'); 

// elixir copy task
elixir.extend("copy", function(src, dest) {

    gulp.task('copy', function () {
      return gulp.src(src).pipe(gulp.dest(dest));
    });

    return this.queueTask("copy");
 });

// elixir uglify task
elixir.extend("uglify", function(src, dest) {

    gulp.task('uglify', function() {
      	return gulp.src(src)
        	.pipe(gulpif(argv.production, uglify()))
        	.pipe(gulp.dest(dest));
    });

    return this.queueTask("uglify");
 });

//elixir imagemin task
elixir.extend("imagemin", function(src, dest){

	gulp.task('imagemin', function () {
	    return gulp.src(src)
	        .pipe(imagemin({
	            progressive: true,
	            svgoPlugins: [{removeViewBox: false}],
	            use: [pngquant()]
	        }))
	        .pipe(gulp.dest(dest));
	});

	return this.queueTask("imagemin");
});

//elixir htmlmin task
elixir.extend("htmlmin", function(src, dest){

	gulp.task('htmlmin', function() {
	  	return gulp.src(src)
	    	.pipe(versionAppend(['html', 'js', 'css']))
	    	.pipe(htmlmin({collapseWhitespace: true}))
	    	.pipe(gulp.dest(dest))
	});

	return this.queueTask("htmlmin");
});

