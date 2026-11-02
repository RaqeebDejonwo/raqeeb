
import { Component, input, inject, computed } from '@angular/core';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail {
  id = input<string>();

  movieService = inject(MovieService);


  movie = computed(() =>
    this.movieService.getMovieById(Number(this.id()))
  );

}
