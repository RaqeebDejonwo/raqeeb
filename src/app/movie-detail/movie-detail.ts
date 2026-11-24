
import {
  Component,
  input,
  inject,
  computed,
  OnInit,
  OnDestroy
} from '@angular/core';

import { MovieService } from '../services/movie';
import { Highlight } from '../directives/highlight';
import { Saved } from '../services/saved';

@Component({
  selector: 'app-movie-detail',
  imports: [Highlight],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail implements OnInit, OnDestroy {
  id = input<string>();

  movieService = inject(MovieService);
  savedService = inject(Saved);

  movie = computed(() =>
    this.movieService.getMovieById(Number(this.id()))
  );

  startTime = 0;
  movieName = '';

  toggleSaved(id: number) {
    this.savedService.toggle(id);
  }

  isSaved(id: number): boolean {
    return this.savedService.isSaved(id);
  }

  ngOnInit() {
    const movie = this.movieService.getMovieById(Number(this.id()));

    this.movieName = movie?.title ?? 'Unknown Movie';
    this.startTime = Date.now();

    console.log('[lifecycle] opened: ' + this.movieName);
  }

  ngOnDestroy() {
    const seconds = Math.round((Date.now() - this.startTime) / 1000);

    console.log(
      '[lifecycle] closed: ' + this.movieName +
      ' after ' + seconds + ' seconds'
    );
  }
}
