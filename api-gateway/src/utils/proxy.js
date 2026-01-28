// src/utils/proxy.js
import axios from 'axios';

const proxyRequest = async ({ method, url, data, headers }) => {
  const response = await axios({
    method,
    url,
    data,
    headers,
  });

  return response.data;
};

export default proxyRequest;
