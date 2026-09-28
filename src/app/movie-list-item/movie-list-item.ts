import { Component, input, output } from '@angular/core';
import { Movie } from '../movie';

export interface MovieEvent {
  id: number;
  action: 'opened' | 'favourited';
}

@Component({
  selector: 'app-movie-list-item',
  imports: [],
  templateUrl: './movie-list-item.html',
  styleUrl: './movie-list-item.css',
})
export class MovieListItem {
  item = input.required<Movie>();
  movieEvent = output<MovieEvent>();

  openMovie() {
    this.movieEvent.emit({
      id: this.item().id,
      action: 'opened',
    });
  }
}
