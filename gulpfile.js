const gulp = require("gulp") // 引入gulp模块
const cssmin = require("gulp-cssmin")
const autoprefixer = require("gulp-autoprefixer")
const uglify = require("gulp-uglify")
const babel = require("gulp-babel")
const htmlmin = require("gulp-htmlmin")
const webserver = require("gulp-webserver")
const sass = require("gulp-sass")(require("sass"))
const sourcemaps = require("gulp-sourcemaps")
const connect = require("gulp-connect")

gulp.task("server", done => {
  connect.server({
    root: "dist",
    livereload: true
  })
  done();
});
/* gulp.task('hello',done=>{ //第一个参数是任务名称，第二个参数是任务功能
	console.log('hello gulp!');
	done();
})  */
  gulp.task("js",done=>{
    gulp.src("src/js/*.js")
      .pipe(babel({
          presets:["@babel/env"]
      }))
      .pipe(uglify())
      .pipe(gulp.dest("dist/js"))
      .pipe(connect.reload())
      done()
  })
gulp.task("html", done => {
    gulp.src("src/*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
    done();
  });
gulp.task("sass", done => {
    gulp.src("src/sass/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: "compressed"
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("dist/css")).pipe(connect.reload());
    done();
  });
  gulp.task("watch", done => {
    gulp.watch("src/*.html", gulp.series("html"));
    gulp.watch("src/sass/*.scss", gulp.series("sass"));
    gulp.watch("src/js/*.js", gulp.series("js"));
    done();
  });

gulp.task("default", gulp.series("watch","server","js"));


