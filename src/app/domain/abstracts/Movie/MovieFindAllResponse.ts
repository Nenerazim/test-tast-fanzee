import type {IMovieEntity} from '$domain/abstracts/Movie/MovieEntity';

export interface IMovieFindAllResponse {
  items: IMovieEntity[];
}
