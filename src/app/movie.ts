export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: 'Action' | 'Comedy' | 'Horror' | 'Drama';
  rating?: number;
  directors: string[];
  cast: string[];
}
