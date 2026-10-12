
import { ApplicationConfig } from '@angular/core';
import { APP_CONFIG } from './config/app.config.token';
import { MovieService } from './services/movie';

export const appConfig: ApplicationConfig = {
  providers: [
    MovieService,
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.example.com/api',
        defaultCategory: 'Action'
      }
    }
  ]
};
