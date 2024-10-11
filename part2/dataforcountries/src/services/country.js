import axios from 'axios';

const baseUri = ' https://studies.cs.helsinki.fi/restcountries/api';

const getAll = () => {
  return axios
    .get(`${baseUri}/all`)
    .then(response => response.data.map(
      country => {
        return {
          name: country.name.common,
          area: country.area,
          capital: country?.capital?.join(', ') ?? '',
          languages: Object.values(country?.languages ?? {}),
          flag: {
            src: country.flags.png,
            alt: country.flags.alt,
          },
        };
      }
    ));
};

export default { getAll };