// Initialising modules
const {src, dest, watch, series} = require('gulp');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');

// File the path variables
const files = {
    // Gets the main scss file
    scssPath: 'assets/scss/main.scss'
}

// Sass task
function scssTask() {
    return src(files.scssPath)
        .pipe(sass())
        .pipe(postcss( [ autoprefixer(), cssnano() ] ))
        .pipe(dest('dest'));
}

// Watch task
function watchTask() {
    // Watching all the sass and js files from the files object
    watch(files.scssPath, scssTask)
}

// Default task
exports.default = series(
    scssTask,
    watchTask
);