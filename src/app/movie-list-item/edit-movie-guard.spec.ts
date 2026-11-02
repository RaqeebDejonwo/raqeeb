import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { editMovieGuard } from './edit-movie-guard';

describe('editMovieGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => editMovieGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
