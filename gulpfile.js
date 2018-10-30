const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const maps = require('gulp-sourcemaps');
const del = require('del');
const gutil = require('gulp-util');
const autoprefixer = require('gulp-autoprefixer');

var jsPaths = [
  'js/app.js'
];

var distFiles = [
  'css/output.min.css',
  'js/output.min.js',
  'incl/**',
  'img/**',
  '*.php',
  'sitemap.xml',
  'manifest.json',
  'robots.txt',
  '.htaccess'
];

gulp.task('compile-sass',function(){
  return gulp.src('./sass/app.sass')
    .pipe(maps.init())      // create maps from scss partials
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
    .pipe(maps.write('./'))   // this path is relative to the output directory
    .pipe(gulp.dest('./css'));  // this is the output directory
});

gulp.task('concat-css',['compile-sass'], function(){
  return gulp.src(['css/app.css'])
    .pipe(concat('output.css')) // concat into file name
    .pipe(gulp.dest('css'));  // send that file to the css directory
});

gulp.task('minify-css',['concat-css'], function(){
  return gulp.src('css/output.css')
    .pipe(maps.init({ loadMaps: true }))   // create maps from scss *sourcemaps* not the css
    .pipe(cleanCSS())
    .pipe(rename('output.min.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'));
});

gulp.task('concat-scripts', function(){
  return gulp.src( jsPaths )
    .pipe(maps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('output.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

gulp.task('minify-scripts', ['concat-scripts'], function(){
  return gulp.src('js/output.js')
    .pipe(maps.init({ loadmaps: true }))
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(rename('output.min.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

gulp.task('clean', function(){
  del(['dist','css/output*.css*','css/style.css*','js/output*.js*']);
});

gulp.task('watch', function(){
  gulp.watch('./sass/**/*.sass',['minify-css']);
  gulp.watch('./sass/critical.sass',['critical-css']);
  gulp.watch('./js/app.js',['minify-scripts']);
});

gulp.task('build', ['minify-scripts', 'minify-css'], function(){ // array defined dependencies, which are all run before the default task
  return gulp.src(distFiles, {base:'./'})
    .pipe(gulp.dest('dist'));
});

gulp.task('build--lean', ['minify-scripts', 'minify-css'], function(){ // array defined dependencies, which are all run before the default task
  return gulp.src(distFiles, {base:'./'})
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch']);