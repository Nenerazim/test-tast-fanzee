import type {IMovieFindOneResponse} from '$domain/abstracts/Movie';

export const detailMovie: IMovieFindOneResponse = {
  id: 16,
  name: 'Cortez Abbott',
  description:
    'Pariatur nulla officia magna dolor culpa ut. Consectetur duis dolore elit ea ut fugiat ad aute nisi. Proident ullamco Lorem deserunt laboris anim duis. Pariatur nulla officia magna dolor culpa ut. Consectetur duis dolore elit ea ut fugiat ad aute nisi. Proident ullamco Lorem deserunt laboris anim duis.',
  duration: '3:18',
  rating: 7.341,
  poster:
    'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/6065863209125e295754986589a1c93d_fd6f5762-2929-428c-99e7-a201d9190a6a_500x749.jpg?v=1573652517',
  genre: 'action',
  trivia: ['Trivia One', 'Trivia Two'],
  actors: [
    {
      name: 'Jack Nicholson',
      imdb_id: 'nm0000197'
    },
    {
      name: 'George Clooney',
      imdb_id: 'nm0000123'
    }
  ]
};
