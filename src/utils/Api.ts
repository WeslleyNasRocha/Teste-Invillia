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
  getDetails: ({ id }) =>
    api.get('/maps/api/place/details/json', {
      key: 'AIzaSyBKucCGb2NaEbM1QqHjh5pm3HRW7tuSETQ',
      place_id: id,
    }),
};
