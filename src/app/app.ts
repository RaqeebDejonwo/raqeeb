// app.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from './movie';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('untitled');

  firstVariable: string = 'hello matthew';
  secondVariable: number = 31;

  movies: Movie<string[]>[] = [
    {
      title: 'invincible',
      year: 2021,
      genre: 'Action',
      directors: ['John Singleton'],
      cast: ['invincible', 'ominiman'],
      rating: 8.5,
    },
    {
      title: 'all american',
      year: 2018,
      genre: 'Comedy',
      directors: ['John Singleton'],
      cast: ['spencer james', 'olivia'],
      rating: 7.9,
    },
    {
      title: 'peaky blinders',
      year: 2020,
      genre: 'Action',
      directors: ['John Singleton'],
      cast: ['thomas', 'arthur'],
      rating: 9.5,
    },

    {
      title: 'snowfall',
      year: 2017,
      genre: 'Action',
      directors: ['John Singleton'],
      cast: ['Damson Idris', 'mikey'],
      rating: 9.9,
    },

    {
      title: 'power',
      year: 2020,
      genre: 'Action',
      directors: ['John Singleton'],
      cast: ['ghost', 'tariq'],
      rating: 7.9,
    },

    {
      title: 'suit',
      year: 2016,
      genre: 'Action',
      directors: ['John Singleton'],
      cast: ['harvey', 'mike'],
      rating: 8.0,
    },
  ];
}
