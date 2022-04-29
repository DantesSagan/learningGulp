// npm i gulp -D
// npm i gulp-cli -g
// npm i -D del
// npm i -D gulp-file-include

// Основной модуль
import gulp from 'gulp';
// Импорт путей
import { path } from './gulp/config/path.js';
// Imports common plugins
import { plugins } from './gulp/config/plugins.js';

// Передаем значения в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// Импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';

// Watcher for changes in file system
// Adding html watcher
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
}

// Creating mainTasks for parallelled executed fn
// because of complex scripts
const mainTasks = gulp.parallel(copy, html);

// Building a scripts for running tasks
// And adding between reset and watcher mainTasks
const dev = gulp.series(reset, mainTasks, watcher);

// Выполнение сценария по умолчанию
// or building scripts for running tasks with dev const
gulp.task('default', dev);
