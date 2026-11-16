
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
