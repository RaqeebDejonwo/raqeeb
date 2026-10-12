
import { computed, Injectable, signal } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from './movie';

@Injectable()
export class MockMovieService extends MovieService {

  private mockMovies = signal<Movie[]>([
    {
      id: 101,
      title: 'Mock Action Movie',
      year: 2026,
      genre: 'Action',
      directors: ['Mock Director'],
      cast: ['Mock Actor'],
      rating: 9.0,
      image: '/images/dark-knight.jpeg',
    },
    {
      id: 102,
      title: 'Mock Comedy Movie',
      year: 2025,
      genre: 'Comedy',
      directors: ['Test Director'],
      cast: ['Test Actor'],
      rating: 8.0,
      image: '/images/suits.jpeg',
    }
  ]);

  override movieList = this.mockMovies.asReadonly();

  override actionMovies = computed(() =>
    this.movieList().filter(movie => movie.genre === 'Action')
  );

  override highRatedActionMovies = computed(() =>
    this.actionMovies().filter(
      movie => movie.rating && movie.rating >= 8.5
    )
  );

  override movieSummary = computed(() =>
    'There are ' + this.movieList().length + ' movies in the collection.'
  );

  override addMovie(newMovie: Movie): void {
    const duplicateMovie = this.movieList().some(
      movie => movie.id === newMovie.id
    );

    if (duplicateMovie) {
      console.log('A movie with this ID already exists.');
      return;
    }

    this.mockMovies.update(list => [...list, newMovie]);
  }
}
