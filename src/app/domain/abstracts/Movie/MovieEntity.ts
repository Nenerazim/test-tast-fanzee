import type {IDefaultEntity} from '$shared/domain/abstracts/Entity/DefaultEntity';

export interface IMovieEntity extends IDefaultEntity {
  name: string;
  description: string;
  duration: string;
  rating: number;
  poster: string;
  genre: string;
}
