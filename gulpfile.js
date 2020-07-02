//  Dependencies
//  ============================================================================

var gulp = require('gulp'),
	sass = require('gulp-sass'), // Compile Sass to CSS
	sourcemaps = require('gulp-sourcemaps'), // Add Sourcemaps to CSS

    autoprefixer = require('gulp-autoprefixer');

	postcss = require('gulp-postcss');
	removePrefixes = require('postcss-remove-prefixes')
	autoprefixer = require('autoprefixer')
//  Styles
//  ============================================================================


function css() {
	return gulp
		.src("./Resources/Public/Css/SassFiles/style.scss")
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([ removePrefixes(), autoprefixer()]))
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('./Resources/Public/Css'));
}






//  Watch - watches the project for changes and then runs every task.
//  ============================================================================

function watchTask(){
	// gulp.watch takes in the location of the files to watch for changes
	// and the name of the function we want to run on change
	gulp.watch("./Resources/Public/Css/SassFiles/**/*", css);
}

function watchFiles() {
	gulp.watch("./Resources/Public/Css/SassFiles/**/*", css);
}


exports.css = css;
exports.watchFiles = watchFiles;

