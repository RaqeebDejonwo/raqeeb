
import { CanActivateFn } from '@angular/router';
let allowEditing = true;

export const editMovieGuard: CanActivateFn = (route, state) => {
  return allowEditing;
};
