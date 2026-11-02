
import { Routes } from '@angular/router';
import { MovieList } from './movie-list/movie-list';
import { MovieDetail } from './movie-detail/movie-detail';
import { MovieForm } from './movie-list-item/movie-form/movie-form';
import { editMovieGuard } from './movie-list-item/edit-movie-guard';

export const routes: Routes = [
  { path: '', component: MovieList },
  { path: 'movies/add', component: MovieForm },
  { path: 'movies/:id', component: MovieDetail },
  {
    path: 'movies/:id/edit',
    component: MovieForm,
    canActivate: [editMovieGuard]
  }
];
