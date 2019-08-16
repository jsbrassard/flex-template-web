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
      bounds: new LatLngBounds(new LatLng(48.62131944, -70.8415563), new LatLng(48.27941049, -71.29836296)),
    },
  },
  {
    id: 'default-turku',
    predictionPlace: {
      address: 'Quebec, Quebec',
      bounds: new LatLngBounds(new LatLng(46.99554678, -71.04934911), new LatLng(46.64279468, -71.50615578)),
    },
  },
  {
    id: 'default-tampere',
    predictionPlace: {
      address: 'Trois-Rivieres, Quebec',
      bounds: new LatLngBounds(new LatLng(46.59108765, -72.3466331), new LatLng(46.23568221, -72.80343976)),
    },
  },
  {
    id: 'default-oulu',
    predictionPlace: {
      address: 'Montreal, Quebec',
      bounds: new LatLngBounds(new LatLng(45.9447086, -73.23691828), new LatLng(45.22317287, -74.15053161)),
    },
  },
];
