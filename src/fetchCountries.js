import { clearPage } from './index';
import Notiflix from 'notiflix';

export const fetchCountries = function (name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(() => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
      clearPage();
    });
};
