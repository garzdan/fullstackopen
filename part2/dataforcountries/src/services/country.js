import axios from 'axios';

const baseUri = ' https://studies.cs.helsinki.fi/restcountries/api';

const getAll = () => {
  return axios
    .get(`${baseUri}/all`)
    .then(response => response.data);
};

export default { getAll };