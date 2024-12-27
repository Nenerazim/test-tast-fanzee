import {NuxtApiDatasource} from '$data/datasources/NuxtApiDatasource';
import type {IMovieFindAllResponse, IMovieFindOneResponse} from '$domain/abstracts/Movie';
import type {DefaultResponse} from '$shared/domain/abstracts/DefaultResponse/DefaultResponse';

export class MovieRepository extends NuxtApiDatasource {
  async getAllMovie() {
    return await this.httpClient.get<DefaultResponse<IMovieFindAllResponse>>(`/api/FindAllMovie`);
  }

  async findOneMovie(id: number) {
    return await this.httpClient.get<DefaultResponse<IMovieFindOneResponse>>(`/api/FindOneMovie/${id}`);
  }
}
