
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  MovieEvent,
  MovieListItem
} from '../movie-list-item/movie-list-item';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-movie-list',
  imports: [MovieListItem, RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  private movieService = inject(MovieService);

  movies = this.movieService.movieList;
  actionMovies = this.movieService.actionMovies;
  highRatedActionMovies = this.movieService.highRatedActionMovies;
  movieSummary = this.movieService.movieSummary;

  isLoading = this.movieService.isLoading;
  error = this.movieService.error;

  handleMovieEvent(event: MovieEvent): void {
    console.log('Movie ID:', event.id);
    console.log('Action:', event.action);

    if (event.action === 'delete') {
      this.movieService.deleteMovie(event.id);
    }
  }
}
