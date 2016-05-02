var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', ['browserSync'], function (){
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/client/app/**/*.html', browserSync.reload);
  gulp.watch('src/client/app/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src/client'
    },
  })
})
