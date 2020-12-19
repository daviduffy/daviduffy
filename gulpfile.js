/* jshint laxcomma: true */

const gulp = require('gulp');
const $    = require('gulp-load-plugins')();
const maps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');

gulp.task('concat-scripts', function(){
    return gulp.src( [ 'js/app.js' ] )
        .pipe(maps.init())
        .pipe(concat('output.js'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('js'));
});

gulp.task('minify-scripts',['concat-scripts'], function(){
    return gulp.src('js/output.js')
        .pipe(maps.init({loadmaps:true}))
        .pipe(uglify())
        .pipe(rename('output.min.js'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('js'));
});

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe(maps.init({loadmaps:true}))
    .pipe($.sass({
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
        browsers: ['last 2 version', 'safari 5', 'ie >= 9', 'opera 12.1', 'ios 6', 'android 4']
    }))
    .pipe(maps.write('./')) 
    .pipe(gulp.dest('css'));
});

gulp.task('clean', function(){
  del(['dist','css/app*.css*','js/output*.js*']);
});

gulp.task('build', ['minify-scripts', 'sass'], function(){ // array defined dependencies, which are all run before the default task
    return gulp.src(['css/app.css','js/output.min.js', 'demos/**','incl/**','*.php','img/**'], {base:'./'})
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
