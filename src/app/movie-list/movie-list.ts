import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieListItem } from '../movie-list-item/movie-list-item';

@Component({
  imports: [MovieListItem],
  selector: 'app-movie-list',
  styleUrl: './movie-list.css',
  templateUrl: './movie-list.html',
})
export class MovieList {
  movies: Movie[] = [
    {
      title: 'Invincible',
      year: 2021,
      genre: 'Action',
      directors: ['Robert Kirkman'],
      cast: ['Mark Grayson', 'Omni-Man'],
      rating: 8.7,
    },
    {
      title: 'All American',
      year: 2018,
      genre: 'Comedy',
      directors: ['April Blair'],
      cast: ['Spencer James', 'Olivia Baker'],
      rating: 7.6,
    },
    {
      title: 'Snowfall',
      year: 2017,
      genre: 'Action',
      directors: ['John Singleton'],
      cast: ['Franklin Saint', 'Leon Simmons'],
      rating: 8.4,
    },
    {
      title: 'Power',
      year: 2014,
      genre: 'Action',
      directors: ['Courtney Kemp'],
      cast: ['Ghost', 'Tariq'],
      rating: 8.1,
    },
    {
      title: 'Suits',
      year: 2011,
      genre: 'Comedy',
      directors: ['Aaron Korsh'],
      cast: ['Harvey Specter', 'Mike Ross'],
      rating: 8.4,
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Action',
      directors: ['Christopher Nolan'],
      cast: ['Batman', 'Joker'],
      rating: 9.0,
    },
  ];
}
