
import { Routes } from '@angular/router';
import { MovieList } from './movie-list/movie-list';

export const routes: Routes = [
  {
    path: '',
    component: MovieList
  },
  {
    path: 'movies',
    loadChildren: () => import('./content.routes')
  },
  {
    path: 'movies/:id',
    loadComponent: () =>
      import('./movie-detail/movie-detail')
        .then(m => m.MovieDetail)
  }
];
