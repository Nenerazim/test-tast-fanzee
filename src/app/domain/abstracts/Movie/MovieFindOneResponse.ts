import type {IMovieEntity} from '$domain/abstracts/Movie/MovieEntity';

export interface IMovieAction {
  name: string;
  imdb_id: string;
}
export interface IMovieFindOneResponse extends IMovieEntity {
  trivia: string[];
  actors: IMovieAction[];
}
