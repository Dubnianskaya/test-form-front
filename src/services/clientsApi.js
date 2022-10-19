import axios from 'axios';

import { baseURL } from '../libs/constants';

axios.defaults.baseURL = baseURL;

export async function addClient(client) {
  const data = await axios
    .post(`/clients/add`, client)
    .then(res => res.data);
  return data;
}
