const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

// Compilar Sass
gulp.task("sass", function () {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

// Servir y observar cambios
gulp.task("serve", function () {
  browserSync.init({
    server: "./",
  });

  gulp.watch("scss/**/*.scss", gulp.series("sass"));
  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("js/**/*.js").on("change", browserSync.reload);
});

gulp.task("default", gulp.series("sass", "serve"));
