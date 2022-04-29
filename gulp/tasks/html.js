import fileinclude from 'gulp-file-include';

export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(fileinclude())
      // in this case we replace @img with using regExp to img/ without sing = @
      .pipe(app.plugins.replace(/@img\//g, 'img/ '))
      .pipe(app.gulp.dest(app.path.build.html))
  );
};
