
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe, UpperCasePipe, DecimalPipe } from '@angular/common';
import { Movie } from '../movie';

export interface MovieEvent {
  id: number;
  action: 'opened' | 'favourited' | 'delete';
}

@Component({
  selector: 'app-movie-list-item',
  imports: [RouterLink, TitleCasePipe, UpperCasePipe, DecimalPipe],
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

  deleteMovie() {
    this.movieEvent.emit({
      id: this.item().id,
      action: 'delete',
    });
  }
}
