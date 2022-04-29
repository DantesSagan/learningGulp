import del from 'del';

export function reset() {
  // This method needs for deleting aka using "reset" method for cleaner build before, copy and watch
  return del(app.path.clean);
}
