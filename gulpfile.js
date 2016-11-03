//引入gulp 组件
var gulp = require('gulp');
//JS语法检查
var jshint = require('gulp-jshint');
//sass预处理
var sass = require('gulp-sass');
//文件合并
var concat = require('gulp-concat');
//js压缩
var uglify = require('gulp-uglify');
//重命名
var rename = require('gulp-rename');
//browser服务
var browserSync = require('browser-sync').create();

var jsFiles = [
    './node_modules/angular/angular.js',
    './node_modules/angular-ui-router/release/angular-ui-router.js'
];
//合并、压缩来自npm的JS资源文件
gulp.task('npmscripts',function(){
    return gulp.src(jsFiles)
    .pipe(concat('npm.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(rename('npm.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
})
// 生产环境编写的js和css的处理

//检查脚本
gulp.task('lint',function(){
    gulp.src('./src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
})
//编译sass
gulp.task('sass',function(){
    gulp.src('./src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/style'));
    gulp.src('./src/styles/**/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/css'))
})
//合并、压缩js文件
gulp.task('scripts',function(){
    gulp.src('./src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
})
//静态服务器，初始化browserSync
gulp.task('browser-sync',function(){
    browserSync.init({
        server:{
            baseDir:'./src/'
        }
    })
})



//默认任务
gulp.task('default',function(){
    gulp.run('npmscripts');
    //初始化服务
    browserSync.init({
        server:{
            baseDir:'./dist/'
        }
    });
    //监听js变化，如果发生变化则执行lint和scripts两个任务
    gulp.watch('./src/**/*.js',['lint','scripts']);

    //监听sass变化,如果发生变化就执行sass任务
    gulp.watch('./src/styles/**/*.scss',['sass']);
    //监听src任何文件发生变化,则自动刷新浏览器
    gulp.watch('./src/**',function(){
        browserSync.reload();
    })
})

