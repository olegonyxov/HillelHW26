const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default


const BUILD_FOLDER = "./dist";
const SRC_JS_FOLDER = "./src/js/*.js";
const SRC_CSS_FOLDER = "./src/styles/*.css";




function watcher() {
    return gulp.watch(SRC_JS_FOLDER, minifyJS,)
}

function minifyJS () {
    return gulp.src(SRC_JS_FOLDER)
        .pipe(uglify())
        .pipe(gulp.dest(BUILD_FOLDER));
}
function minifyCss () {
    return gulp.src(SRC_CSS_FOLDER)
    .pipe(cleanCSS())
    .pipe(gulp.dest(BUILD_FOLDER));
       
}
gulp.task('default', gulp.series(minifyJS, minifyCss, watcher));