import {cardsMovie, detailMovie} from '$shared/mock';
import {defineEventHandler} from 'h3';

export default defineEventHandler(async (event) => {
  const {params} = event.context;

  if (!params || !params.id) {
    throw createError({statusCode: 400, statusMessage: 'Invalid ID'});
  }

  const {id} = params;

  return {
    data: {
      ...cardsMovie.items[Number(id) - 1],
      trivia: detailMovie.trivia,
      actors: detailMovie.actors
    },
    status: 200
  };
});
