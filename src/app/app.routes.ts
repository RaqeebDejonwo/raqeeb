
import { Routes } from '@angular/router';
import { MovieList } from './movie-list/movie-list';
import { editMovieGuard } from './movie-list-item/edit-movie-guard';

export const routes: Routes = [
  {
    path: '',
    component: MovieList
  },
  {
    path: 'movies/add',
    loadComponent: () =>
      import('./movie-list-item/movie-form/movie-form')
        .then(m => m.MovieForm)
  },
  {
    path: 'movies/:id',
    loadComponent: () =>
      import('./movie-detail/movie-detail')
        .then(m => m.MovieDetail)
  },
  {
    path: 'movies/:id/edit',
    loadComponent: () =>
      import('./movie-list-item/movie-form/movie-form')
        .then(m => m.MovieForm),
    canActivate: [editMovieGuard]
  }
];
