const run = require('gulp-run');
const clean = require('gulp-clean');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');
const changed = require('gulp-changed');

const paths = {
  libraries_js: [
    'node_modules/angular/angular.js',
    'node_modules/angular-animate/angular-animate.js',
    'node_modules/angular-ui-router/release/angular-ui-router.js',
    'node_modules/angular-touch/angular-touch.js',
    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    'node_modules/angular-smart-table/dist/smart-table.js',
    'node_modules/angular-sanitize/angular-sanitize.js',
    'node_modules/ng-toast/dist/ngToast.js'
  ],
  libraries_css: [
    'node_modules/bootstrap/dist/css/bootstrap.css'
    ,'node_modules/ng-toast/dist/ngToast.css'
     ,'node_modules/ng-toast/dist/ngToast-animations.css'
  ],
  libraries_fonts: [
    'node_modules/bootstrap/fonts/*.*'
  ],
  app_css: [
    'src/assets/styles.css'
  ],
  app_js: [
    'src/**/*.module.js',
    'src/**/*.service.js',
    'src/**/*.js'
  ],
  app_dest: 'dist',
  libraries_js_dest: 'lib/js',
  libraries_css_dest: 'lib/css',
  libraries_fonts_dest: 'lib/fonts',
}

gulp.task('copy-imgs', function (cb) {
  pump([
    gulp.src([
      './src/assets/img/*.svg',
      './src/assets/img/*.jpg']),
    gulp.dest('./dist/imgs/')
  ],
    cb
  )
});

gulp.task('move-fonts', function (cb) {
  pump([
    gulp.src(paths.libraries_fonts),
    gulp.dest(paths.libraries_fonts_dest)
  ],
    cb
  );
});

gulp.task('build-libs', function (cb) {
  const ngAnnotate = require('gulp-ng-annotate');

  pump([
    gulp.src(paths.libraries_js),
    ngAnnotate(),
    uglify(),
    concat('libraries.js'),
    gulp.dest(paths.libraries_js_dest)
  ],
    cb
  );
});

gulp.task('minify-libs-css', function (cb) {
  const cleanCSS = require('gulp-clean-css');

  pump([
    gulp.src(paths.libraries_css),
    cleanCSS(),
    concat('libraries.css'),
    gulp.dest(paths.libraries_css_dest)
  ],
    cb
  );
});

gulp.task('minify-css', function (cb) {
  const cleanCSS = require('gulp-clean-css');

  pump([
    gulp.src(paths.app_css),
    changed(paths.app_dest),
    cleanCSS(),
    concat('app.css'),
    gulp.dest(paths.app_dest)
  ],
    cb
  );
});

gulp.task('build-app', function (cb) {
  const ngAnnotate = require('gulp-ng-annotate');

  pump([
    gulp.src(paths.app_js),
    changed(paths.app_dest),
    ngAnnotate(),
    uglify(),
    concat('app.js'),
    gulp.dest(paths.app_dest)
  ],
    cb
  );
});

gulp.task('run', function () {
  return run('electron .').exec();
});

gulp.task('default', ['watch', 'build-libs', 'copy-imgs', 'move-fonts', 'build-app', 'minify-libs-css', 'minify-css']);

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.app_css, ['minify-css']);
  gulp.watch(paths.app_js, ['build-app']);
});