'use strict';

var projectName = "wisdom";

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var zip = require('gulp-zip');

var runTimestamp = Math.round(Date.now()/1000);

var fontName = 'Icons';

gulp.task('iconfont', function() {
  return gulp.src(['img/icons/*.svg']) // Source folder containing the SVG images
    .pipe(iconfontCss({
      fontName: fontName, // The name that the generated font will have
      targetPath: '../../sass/base/_icons.scss', // The path where the file will be generated
      fontPath: '#{$fontUrl}/icons/' // The path to the icon font file
    }))
    .pipe(iconfont({
      prependUnicode: false, // Recommended option
      fontName: fontName, // Name of the font
      formats: ['ttf', 'eot', 'woff'], // The font file formats that will be created
      normalize: true,
      timestamp: runTimestamp // Recommended to get consistent builds when watching files
    }))
    .pipe(gulp.dest('fonts/icons/'));
});

gulp.task('styles', function () {
  return gulp.src('./sass/style.scss')
    // Compile SASS files
    .pipe(sass({
      outputStyle: 'nested',
      onError: console.error.bind(console, 'Sass error:')
    }))
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer())
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', function(cb) {
  gulp.watch('sass/**/**.scss', ['styles']);
});

gulp.task('zip', function() {
    gulp.src(['./**', '!./node_modules', '!./node_modules/**', '.editorconfig', 'gulpfile.js', '*.json'])
        .pipe(zip(projectName + '.zip'))
        .pipe(gulp.dest('dist'))
});
