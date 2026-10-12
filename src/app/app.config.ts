
import { ApplicationConfig } from '@angular/core';
import { APP_CONFIG } from './config/app.config.token';
import { MovieService } from './services/movie';
import { MockMovieService } from './services/mock-movie';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.example.com/api',
        defaultCategory: 'Action'
      }
    },

    // To switch back to the real MovieService,
    // remove the useClass provider below
    // and register MovieService directly.
    {
      provide: MovieService,
      useClass: MockMovieService
    }
  ]
};
