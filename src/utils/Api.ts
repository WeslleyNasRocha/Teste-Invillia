import { create } from 'apisauce';

// define the api
const api = create({
  baseURL: 'https://maps.googleapis.com',
  // headers: { Accept: 'application/vnd.github.v3+json' },
});

export const requests = {
  getNearby: ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) =>
    api.get('/maps/api/place/nearbysearch/json', {
      location: `${String(latitude)},${String(longitude)}`,
      rankby: 'distance',
      key: 'AIzaSyBKucCGb2NaEbM1QqHjh5pm3HRW7tuSETQ',
    }),
  autocomplete: ({ input }) =>
    api.get('maps/api/place/autocomplete/json', {
      input,
      key: '',
    }),
  searchPlaces: () => api.get('/'),
};
