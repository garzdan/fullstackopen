import axios from 'axios';

const baseUri = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(baseUri)
    .then(response => response.data);
};

const create = (data) => {
  return axios.post(baseUri, data)
    .then(response => response.data);
};

export default { getAll, create };