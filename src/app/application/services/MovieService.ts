import {MovieRepository} from '$data/repositories/Movie';
import type {IMovieFindAllResponse} from '$domain/abstracts/Movie';

export class MovieService {
  private movieRepository: MovieRepository;

  constructor() {
    this.movieRepository = new MovieRepository();
  }

  async getAll() {
    return await this.movieRepository
      .getAllMovie()
      .then((response) => response.data)
      .catch(() => [] as unknown as IMovieFindAllResponse);
  }

  async findOne(id: number) {
    return await this.movieRepository
      .findOneMovie(id)
      .then((response) => response.data)
      .catch(() => {
        throw createError({
          statusCode: 404,
          fatal: true
        });
      });
  }
}
