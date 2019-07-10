const gulp = require('gulp');//引入gulp
const minihtml = require('gulp-minify-html');
gulp.task('uglifyhtml', () => {
    return gulp.src('src/*.html')//引入文件
        .pipe(minihtml())//执行压缩插件
        .pipe(gulp.dest('dist/'));//输出
});