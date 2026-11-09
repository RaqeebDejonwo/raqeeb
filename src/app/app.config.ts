
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

import { APP_CONFIG } from './config/app.config.token';
import { MovieService } from './services/movie';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),

    provideRouter(routes, withComponentInputBinding()),

    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: 'https://api.tvmaze.com',
        defaultCategory: 'Action'
      }
    },

    MovieService
  ]
};
