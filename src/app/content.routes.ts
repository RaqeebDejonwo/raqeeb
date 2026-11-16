
import { Routes } from '@angular/router';
import { editMovieGuard } from './movie-list-item/edit-movie-guard';

export default [
  {
    path: 'add',
    loadComponent: () =>
      import('./movie-list-item/movie-form/movie-form')
        .then(m => m.MovieForm)
  },
  {
    path: ':id/edit',
    loadComponent: () =>
      import('./movie-list-item/movie-form/movie-form')
        .then(m => m.MovieForm),
    canActivate: [editMovieGuard]
  }
] as Routes;
