import { computed, effect, Service, signal } from '@angular/core';
import { Movie } from '../movie';

@Service()
export class MovieService {
  private movies = signal<Movie[]>([
    {
      id: 1,
      title: 'Invincible',
      year: 2021,
      genre: 'Action',
      directors: ['Robert Kirkman'],
      cast: ['Mark Grayson', 'Omni-Man'],
      rating: 8.7,
      image: '/images/invincible.jpeg',
    },
    {
      id: 2,
      title: 'All American',
      year: 2018,
      genre: 'Comedy',
      directors: ['April Blair'],
      cast: ['Spencer James', 'Olivia Baker'],
      rating: 7.6,
      image: '/images/all-american.jpeg',
    },
    {
      id: 3,
      title: 'Snowfall',
      year: 2017,
      genre: 'Comedy',
      directors: ['John Singleton'],
      cast: ['Franklin Saint', 'Leon Simmons'],
      rating: 8.4,
      image: '/images/snowfall.jpeg',
    },
    {
      id: 4,
      title: 'Power',
      year: 2014,
      genre: 'Action',
      directors: ['Courtney Kemp'],
      cast: ['Ghost', 'Tariq'],
      rating: 8.1,
      image: '/images/powers.jpeg',
    },
    {
      id: 5,
      title: 'Suits',
      year: 2011,
      genre: 'Comedy',
      directors: ['Aaron Korsh'],
      cast: ['Harvey Specter', 'Mike Ross'],
      rating: 8.4,
      image: '/images/suits.jpeg',
    },
    {
      id: 6,
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Action',
      directors: ['Christopher Nolan'],
      cast: ['Batman', 'Joker'],
      rating: 9.0,
      image: '/images/dark-knight.jpeg',
    },
  ]);

  movieList = this.movies.asReadonly();

  actionMovies = computed(() =>
    this.movieList().filter(movie => movie.genre === 'Action')
  );

  highRatedActionMovies = computed(() =>
    this.actionMovies().filter(
      movie => movie.rating && movie.rating >= 8.5
    )
  );

  movieSummary = computed(() =>
    'There are ' + this.movieList().length + ' movies in the collection.'
  );

  constructor() {
    effect(() => {
      console.log('Movie count is now:', this.movieList().length);
    });
  }

  addMovie(newMovie: Movie): void {
    const duplicateMovie = this.movieList().some(
      movie => movie.id === newMovie.id
    );

    if (duplicateMovie) {
      console.log('A movie with this ID already exists.');
      return;
    }

    this.movies.update(list => [...list, newMovie]);
  }
}
