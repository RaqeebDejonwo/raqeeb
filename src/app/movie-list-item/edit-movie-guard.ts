
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { MovieService } from '../services/movie';

export const editMovieGuard: CanActivateFn = (route, state) => {
  const movieService = inject(MovieService);
  const movieId = Number(route.paramMap.get('id'));

  const movie = movieService.getMovieById(movieId);

  return movie !== undefined && movie !== null;
};
