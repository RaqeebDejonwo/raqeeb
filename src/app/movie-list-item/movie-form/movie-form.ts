
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie';
import { Movie } from '../../movie';

function movieTitleValidator(control: AbstractControl): ValidationErrors | null {
  const title = control.value;

  if (title && title.trim().length < 3) {
    return { shortTitle: true };
  }

  return null;
}


function movieRatingValidator(control: AbstractControl): ValidationErrors | null {
  const rating = control.get('rating')?.value;
  const director = control.get('directors')?.value;

  if (rating >= 9 && !director?.trim()) {
    return { directorRequired: true };
  }

  return null;
}


@Component({
  selector: 'app-movie-form',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css'
})
export class MovieForm {
  private fb = inject(FormBuilder);
  private movieService = inject(MovieService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  movieId = Number(this.route.snapshot.paramMap.get('id'));
  isEditMode = this.route.snapshot.routeConfig?.path === 'movies/:id/edit';

  movieForm = this.fb.group({
    title: ['', [Validators.required, movieTitleValidator]],
    year: [2026, Validators.required],
    genre: ['', Validators.required],
    directors: ['', Validators.required],

    rating: [0, [Validators.required, Validators.min(0), Validators.max(10)]]
  }, { validators: movieRatingValidator });


  constructor() {
    if (this.isEditMode) {
      const movie = this.movieService.getMovieById(this.movieId);

      if (movie) {
        this.movieForm.patchValue({
          title: movie.title,
          year: movie.year,
          genre: movie.genre,
          directors: movie.directors.join(', '),
          rating: movie.rating
        });
      }
    }
  }

  addMovie() {
    if (this.movieForm.valid) {
      const values = this.movieForm.value;

      if (this.isEditMode) {
        const oldMovie = this.movieService.getMovieById(this.movieId);

        if (oldMovie) {
          const updatedMovie: Movie = {
            id: oldMovie.id,
            title: values.title || '',
            year: values.year || 2026,
            genre: values.genre || '',
            directors: [values.directors || ''],
            cast: oldMovie.cast,
            rating: values.rating ?? 0,
            image: oldMovie.image
          };

          this.movieService.updateMovie(updatedMovie);
        }

      } else {
        const newMovie: Movie = {
          id: Math.max(0, ...this.movieService.movieList().map(movie => movie.id)) + 1,
          title: values.title || '',
          year: values.year || 2026,
          genre: values.genre || '',
          directors: [values.directors || ''],
          cast: [],
          rating: values.rating ?? 0,
          image: ''
        };

        this.movieService.addMovie(newMovie);
      }

      this.movieForm.reset();
      this.router.navigate(['/']);
    }
  }
}
