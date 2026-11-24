
import { Component, inject, computed, signal, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  MovieEvent,
  MovieListItem
} from '../movie-list-item/movie-list-item';
import { MovieService } from '../services/movie';
import { Highlight } from '../directives/highlight';
import { Saved } from '../services/saved';

@Component({
  selector: 'app-movie-list',
  imports: [MovieListItem, RouterLink, Highlight],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {
  private movieService = inject(MovieService);
  private savedService = inject(Saved);

  movies = this.movieService.movieList;
  actionMovies = this.movieService.actionMovies;
  highRatedActionMovies = this.movieService.highRatedActionMovies;
  movieSummary = this.movieService.movieSummary;

  searchTerm = signal(this.loadSearch());

  filteredMovies = computed(() =>
    this.movies().filter(movie =>
      movie.title.toLowerCase().includes(
        this.searchTerm().toLowerCase()
      )
    )
  );

  savedMovies = computed(() =>
    this.movies().filter(movie =>
      this.savedService.saved().includes(movie.id)
    )
  );

  isLoading = this.movieService.isLoading;
  error = this.movieService.error;

  constructor() {
    effect(() => {
      try {
        localStorage.setItem('movies.search', this.searchTerm());
      } catch {
        console.log('Unable to save search term');
      }
    });
  }

  private loadSearch(): string {
    try {
      return localStorage.getItem('movies.search') || '';
    } catch {
      return '';
    }
  }

  handleMovieEvent(event: MovieEvent): void {
    console.log('Movie ID:', event.id);
    console.log('Action:', event.action);

    if (event.action === 'delete') {
      this.movieService.deleteMovie(event.id);
    }
  }
}
