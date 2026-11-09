
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';

import { APP_CONFIG } from './config/app.config.token';
import { MovieService } from './services/movie';
import { loadingInterceptor } from './interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor])),

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
