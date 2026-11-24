import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Saved {
  private savedIds = signal<number[]>(this.loadSaved());

  saved = this.savedIds.asReadonly();

  constructor() {
    effect(() => {
      try {
        localStorage.setItem(
          'movies.saved',
          JSON.stringify(this.savedIds())
        );
      } catch {
        console.log('Unable to save movie IDs');
      }
    });
  }

  private loadSaved(): number[] {
    try {
      const data = localStorage.getItem('movies.saved');

      if (data) {
        return JSON.parse(data);
      }
    } catch {
      return [];
    }

    return [];
  }

  toggle(id: number) {
    if (this.isSaved(id)) {
      this.savedIds.update(ids => ids.filter(item => item !== id));
    } else {
      this.savedIds.update(ids => [...ids, id]);
    }
  }

  isSaved(id: number): boolean {
    return this.savedIds().includes(id);
  }
}
