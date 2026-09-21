export interface Movie<T> {
  title: string;
  year: number;
  genre: 'Action' | 'Comedy' | 'Horror';
  rating?: number;
  directors: string[];
  cast: T;
}
