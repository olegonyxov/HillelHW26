const gulp = require('gulp')

const BUILD_JS_FOLDER = "./dist/js";
const SRC_JS_FOLDER = "./src/js/*.js";
const BUILD_CSS_FOLDER = "./dist/styles";
const SRC_CSS_FOLDER = "./src/styles/*.css";




function watcher() {
    return gulp.watch(SRC_JS_FOLDER, copyJs, SRC_CSS_FOLDER, copyCss)
}

function copyJs () {
    return gulp.src(SRC_JS_FOLDER)
        .pipe(gulp.dest(BUILD_JS_FOLDER));
}
function copyCss () {
    return gulp.src(SRC_CSS_FOLDER)
        .pipe(gulp.dest(BUILD_CSS_FOLDER))
}
gulp.task('default', gulp.series(copyJs, copyCss, watcher));