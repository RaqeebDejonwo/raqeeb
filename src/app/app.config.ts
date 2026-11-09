
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';

import { APP_CONFIG } from './config/app.config.token';
import { MovieService } from './services/movie';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // Loading tracks requests and error catches failures.
    // finalize() runs even if the request fails,
    // so the loading counter is reset.
    provideHttpClient(withInterceptors([
      loadingInterceptor,
      errorInterceptor
    ])),

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
