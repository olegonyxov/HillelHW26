const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

const BUILD_JS_FOLDER = "./dist/js";
const SRC_JS_FOLDER = "./src/js/*.js";
const BUILD_CSS_FOLDER = "./dist/styles";
const SRC_CSS_FOLDER = "./src/styles/*.css";




function watcher() {
    return gulp.watch(SRC_JS_FOLDER, copyJs,)
}

function copyJs () {
    return gulp.src(SRC_JS_FOLDER)
        .pipe(gulp.dest(BUILD_JS_FOLDER));
}
function minifyCss () {
    return gulp.src(SRC_CSS_FOLDER)
    .pipe(cleanCSS())
    .pipe(gulp.dest(BUILD_CSS_FOLDER));
       
}
gulp.task('default', gulp.series(copyJs, minifyCss, watcher));