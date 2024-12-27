import type {IDefaultEntity} from "$shared/domain/abstracts/Entity/DefaultEntity";

export interface IMovie extends IDefaultEntity   {
    name: string,
    description: string,
    duration: string,
    rating: number,
    poster: string,
    genre: string
}