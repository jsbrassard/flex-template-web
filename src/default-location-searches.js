import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-helsinki',
    predictionPlace: {
      address: 'Saguenay, Quebec',
      bounds: new LatLngBounds(new LatLng(48.42792, -71.06817)),
    },
  },
  {
    id: 'default-turku',
    predictionPlace: {
      address: 'Quebec, Quebec',
      bounds: new LatLngBounds(new LatLng(60.53045, 22.38197), new LatLng(60.33361, 22.06644)),
    },
  },
  {
    id: 'default-tampere',
    predictionPlace: {
      address: 'Trois-Rivieres, Quebec',
      bounds: new LatLngBounds(new LatLng(61.83657, 24.11838), new LatLng(61.42728, 23.5422)),
    },
  },
  {
    id: 'default-oulu',
    predictionPlace: {
      address: 'Montreal, Quebec',
      bounds: new LatLngBounds(new LatLng(65.56434, 26.77069), new LatLng(64.8443, 24.11494)),
    },
  },
];
