import { Component, input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list-item',
  imports: [],
  templateUrl: './movie-list-item.html',
  styleUrl: './movie-list-item.css',
})
export class MovieListItem {
  item = input.required<Movie>();
}
