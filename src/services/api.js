import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

const getRequest = (url, params) => axios.get(url, params);
const postRequest = (url, data, config) => axios.post(url, data, config);

const BASE_API = 'https://reqres.in/api/';
const ENDPOINT = {
  USERS: 'users',
};

export const getUsers = ({ page, rowsPerPage }) =>
  getRequest(`${BASE_API}${ENDPOINT.USERS}`, {
    params: {
      page,
      per_page: rowsPerPage,
    },
  });
