import { Component, inject } from '@angular/core';
import {
  MovieEvent,
  MovieListItem
} from '../movie-list-item/movie-list-item';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-movie-list',
  imports: [MovieListItem],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  private movieService = inject(MovieService);

  movies = this.movieService.movieList;
  actionMovies = this.movieService.actionMovies;

  handleMovieEvent(event: MovieEvent): void {
    console.log('Movie ID:', event.id);
    console.log('Action:', event.action);
  }
}
