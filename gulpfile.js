const gulp = require("gulp") // 引入gulp模块
const cssmin = require("gulp-cssmin")
const autoprefixer = require("gulp-autoprefixer")
const uglify = require("gulp-uglify")
const babel = require("gulp-babel")
const htmlmin = require("gulp-htmlmin")
const webserver = require("gulp-webserver")

function serverFn(){
    // 找到要指定为根目录的文件夹
    return gulp.src("./src")
        // 执行服务器方式，并开始配置信息
        .pipe(webserver({
            // 指定访问地址
            host:"localhost",
            // 指定端口
            port:3000,
            // 开启自动刷新
            livereload:true,
            // 服务器开启后，自动打开的页面
            open:"index.html",
            proxies:[{
                // 代理之后的请求地址
                source:"./chapters",
                // 被代理的跨域地址
                target:"http://wanandroid.com/wxarticle/chapters/json"
                
            }]
        }))
}
gulp.task('hello',done=>{ //第一个参数是任务名称，第二个参数是任务功能
	console.log('hello gulp!');
	done();
}) 
function testFn(){            // 准备指令功能
    console.log("test");
}
function jsFn(){
    return gulp.src("./project/js/**/*")
        .pipe(babel({
            presets:["@babel/env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest("./server/js"))
}
exports.js = jsFn;
exports.server = serverFn;
exports.test = testFn;         // 定义指令（暴露模块）
