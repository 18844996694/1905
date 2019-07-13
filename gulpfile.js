const gulp = require('gulp');//引入gulp
const minihtml = require('gulp-minify-html');
const minicss = require('gulp-minify-css');
const imagemin=require('gulp-imagemin');
const uglify=require('gulp-uglify');
const babel=require('gulp-babel');
const es2015=require('babel-preset-es2015');
gulp.task('uglifyhtml', () => {
    return gulp.src('src/*.html')//引入文件
        .pipe(minihtml())//执行压缩插件
        .pipe(gulp.dest('dist/'));//输出
});
gulp.task('uglifycss', () => {
    return gulp.src('src/css/*.css')//引入文件
        .pipe(minicss())//执行压缩插件
        .pipe(gulp.dest('dist/css'));//输出
});
gulp.task('uglifypng', () => {
    return gulp.src('src/img/*.{png,jpg,gif,ico}')
    .pipe(imagemin({
        optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
        progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
        interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
        multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('babeljs', () => {
    return gulp.src('src/script/js/*.js')//引入文件
        .pipe(babel({
            presets: ['es2015']
        }))//执行压缩插件
        .pipe(uglify())
        .pipe(gulp.dest('dist/script/js'));//输出
});

