/*
 * Marketplace specific configuration.
 */

 export const yearsExperience = [
   { key: 'intern', label: 'Intern' },
   { key: '0to2', label: '0 to 2 years' },
   { key: '3to5', label: '3 to 5 years' },
   { key: '6to8', label: '6 to 8 years' },
   { key: '9to15', label: '9 to 15 years' },
   { key: '16to19', label: '16 to 19 years' },
   { key: '20to25', label: '20 to 25 years' },
   { key: '25plus', label: '25 years and more' },
 ];

export const domain = [
  {
    key: 'mechanical',
    label: 'Mechanical',
  },
  {
    key: 'electrical',
    label: 'Electrical',
  },
  {
    key: 'civil',
    label: 'Civil',
  },
  {
    key: 'chemical',
    label: 'Chemical',
  },
  {
    key: 'industrial',
    label: 'Industrial',
  },
];

export const categories = [
  { key: 'technician', label: 'Technician' },
  { key: 'engineer', label: 'Engineer' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 50,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};
