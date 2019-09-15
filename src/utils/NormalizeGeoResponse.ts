import { GMSTypes } from 'react-native-google-places';

export default function(geoResponse: GMSTypes.Place) {
  const newGeoResponse = {
    geometry: {
      location: {
        lat: geoResponse.location.latitude,
        lng: geoResponse.location.longitude,
      },
    },
    vicinity: geoResponse.address,
    name: geoResponse.name,
    id: geoResponse.placeID,
  };
  return newGeoResponse;
}
