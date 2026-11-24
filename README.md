
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

An end-to-end testing framework must be configured separately.

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

## Lifecycle

### Constructor Experiment

I tried reading this.id() inside the constructor of the Movie Detail component.

The Console displayed:

[constructor] Movie ID: undefined

This happened because Angular had not assigned the route-bound input when the constructor ran.

I moved the movie lookup back to ngOnInit() because the movie ID was available when the component initialized.

### ngOnInit()

I used ngOnInit() to get the movie ID, look up the movie in the MovieService, and record the starting time using Date.now().

The Console displayed:

[lifecycle] opened: Under the Dome

### ngOnDestroy()

When I clicked Movie List to return to the homepage, ngOnDestroy() ran.

The Console displayed:

[lifecycle] closed: Under the Dome after 87 seconds

This shows that Angular destroys the Movie Detail component when the user navigates away from that route.

I used Date.now() and Math.round() to calculate how many seconds the movie detail page was open.
## localStorage

I used localStorage to store saved movie IDs and the user's search term so they remain available after refreshing the browser.

The movie data from the API is not stored because it is fetched again when the application loads.

Passwords should never be stored in localStorage.
