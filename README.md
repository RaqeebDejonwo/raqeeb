
# Untitled

This project was generated using Angular CLI version 22.1.8.

## Development Server

To start the application, run:

```bash
ng serve
```

Open http://localhost:4200/ in your browser.

## Code Scaffolding

To generate a new component, run:

```bash
ng generate component component-name
```

For more commands, run:

```bash
ng generate --help
```

## Building

To build the project, run:

```bash
ng build
```

The build files will be stored in the dist/ folder.

## Running Unit Tests

To run unit tests, use:

```bash
ng test
```

## Running End-to-End Tests

To run end-to-end tests, use:

```bash
ng e2e
```

An end-to-end testing framework must be configured separately.

## Additional Resources

Angular documentation:
https://angular.dev/tools/cli

## API

API Name: TVMaze API

API Documentation:
https://www.tvmaze.com/api

Example Request URL:
https://api.tvmaze.com/shows?page=0

This project uses the TVMaze API to retrieve TV show information.

The API is free, uses HTTPS, returns JSON data, and does not require an API key for this endpoint.

The API returns information such as show ID, name, genres, rating, and image.

## API Loading Method

This project uses Option A: HttpClient with Observables.

HttpClient retrieves movie data from the TVMaze API.

The API response is converted into our Movie model and stored in a writable signal.

I chose HttpClient because it works with the existing movie service and allows the application to keep its local add, edit, and delete features.

## Local Movie Changes

Movies are loaded from the TVMaze API.

Users can add, edit, and delete movies locally.

These changes are stored only in the application's memory.

Refreshing the page reloads the original movies from the API.

No POST, PUT, PATCH, or DELETE requests are sent to TVMaze.

## Lazy Loading

### Before Lazy Loading

| Initial Chunk | Raw Size | Transfer Size |
|---|---|---|
| main-RXA5DBEF.js | 318.30 kB | 84.82 kB |
| Initial Total | 318.30 kB | 84.82 kB |

### After Lazy Loading

| Initial Chunk | Raw Size | Transfer Size |
|---|---|---|
| chunk-3ENJ57OK.js | 164.98 kB | 48.78 kB |
| chunk-XU7XN5FF.js | 104.92 kB | 27.26 kB |
| main-RDWC7VFF.js | 7.60 kB | 2.48 kB |
| Initial Total | 277.50 kB | 78.52 kB |

### Lazy Chunk Files

| Chunk | Raw Size | Transfer Size |
|---|---|---|
| movie-form | 42.59 kB | 9.71 kB |
| movie-detail | 995 bytes | 995 bytes |

### Explanation

I used loadComponent() to lazy load the movie detail, add movie, and edit movie pages.

Before lazy loading, the initial bundle size was 318.30 kB. After lazy loading, it decreased to 277.50 kB.

This means Angular does not need to load all the pages when the application first opens.

The landing page remains eagerly loaded because it is the first page users see when they open the application.
