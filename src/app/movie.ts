export interface Movie {
  title: string;
  year: number;
  genre: 'Action' | 'Comedy' | 'Horror' | 'Drama';
  rating?: number;
  directors: string[];
  cast: string[];
}
