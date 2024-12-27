import {MovieService} from '$application/services/MovieService';
import {LocationHelper} from '$shared/helpers/LocationHelper';

export const useMovieProvider = defineStore('movie', () => {
  const movieService = new MovieService();

  const getAll = async () => {
    return await movieService.getAll();
  };

  const findOne = async () => {
    const pathname = LocationHelper.getSlug();

    return await movieService.findOne(Number(pathname));
  };
  return {getAll, findOne};
});
