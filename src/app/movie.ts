export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  directors: string[];
  cast: string[];
  rating?: number;
  image: string;
}


export interface TVMazeShow {
  id: number;
  name: string;
  premiered: string | null;
  genres: string[];
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
}
