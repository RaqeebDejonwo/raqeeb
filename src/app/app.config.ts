
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
    {
      provide: MovieService,
      useClass: MockMovieService
    }
  ]
};
