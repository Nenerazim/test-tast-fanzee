import {cardsMovie} from '$shared/mock';

export default defineEventHandler( async () => {
  return {data: cardsMovie, status: 200};
});
