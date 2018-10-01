import 'isomorphic-fetch';
import _ from 'lodash';
import qs from 'qs';

const apiUrl = 'http://localhost:3000';

export function getQueryString(params) {
  return qs.stringify(params, {indices: false, arrayFormat: 'brackets'});
}

function fetchData(url, {headers, ...options} = {}) {
  const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 400) {
      return response;
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };

  if (_.isObject(options.body)) {
    options.body = JSON.stringify(options.body);
  }

  if (_.isObject(options.params)) {
    url = `${url}?${getQueryString(options.params)}`;
  }

  options = {credentials: 'same-origin', headers: {...headers}, ...options};
  return fetch(`${apiUrl}${url}`, options)
    .then(checkStatus);
}

export function fetchJson(url, options) {
  return fetchData(url, options)
    .then(response => [204, 304].includes(response.status) ? {} : response.json());
}