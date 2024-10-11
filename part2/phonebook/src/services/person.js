import axios from 'axios';

const baseUri = 'http://localhost:3001/api/persons';

const getAll = () => {
  return axios.get(baseUri)
    .then(response => response.data);
};

const create = (data) => {
  return axios.post(baseUri, data)
    .then(response => response.data);
};

const update = (id, data) => {
  return axios.put(`${baseUri}/${id}`, data)
    .then(response => response.data);
}

const remove = (id) => {
  return axios.delete(`${baseUri}/${id}`)
    .then(response => response.data);
}

export default { getAll, create, update, remove };