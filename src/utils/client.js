import axios from 'axios'

const key = process.env.REACT_APP_API_KEY

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

client.interceptors.request.use(function (config) {
  config.params = {...config.params,  appid: key, units:  'metric'};
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default client
