export interface Movie {
  title: string;
  year: number;
  genre: 'Action' | 'Comedy' | 'Horror';
  rating?: number;
  directors: string[];
  cast: string[];
}
