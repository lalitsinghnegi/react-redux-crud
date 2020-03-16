import axios from 'axios';
/* Write all Application routes here */
const appDashboard = getApplicationUrl('dashboard');

/* Write all API Routes */
const apiFetchProfile = getApiUrl('fetchProfile');
function getApiUrl (route) {
  console.log(process.env)
  const apiUrl = `${process.env.REACT_APP_API_URL}`;
  if (route) {
    return apiUrl + 'api/' + route;
  } else return apiUrl;
}

function getApplicationUrl (route) {
  const baseUrl = `${process.env.REACT_APP_BASE_URL}`;
  if (route) {
    return baseUrl +route;
  } else return baseUrl;
}

function httpGet (url) {
  const config = {
    method: 'get',
    url: url,
    headers: { accessToken: sessionStorage.getItem('accessToken') || '' }
  };
  return axios(config)
    .then(response => Promise.resolve(response))
    .catch(error => {
      handleError(error);
    });
}

function httpGetWithParams (url, params) {
  const config = {
    method: 'get',
    url: url,
    params: params,
    headers: { accessToken: sessionStorage.getItem('accessToken') || '' }
  };
  return axios(config)
    .then(response => Promise.resolve(response))
    .catch(err => {
      handleError(err);
    });
}

function handleError (error) {
  if (typeof error.response !== 'undefined') {
    if (error.response.status === 401) {
      logout('landing');
    } else {
      throw error;
    }
  } else {
    logout('error');
    throw error;
  }
}

function logout (error) {
  sessionStorage.clear();
  console.log('logout-2.....')
  //TODO - Push the router to land the user to landing page
 // router.push({ name: error });
}

function httpPost (url, params) {
  const config = {
    method: 'post',
    url: url,
    data: params,
    headers: { accessToken: sessionStorage.getItem('accessToken') || '' }
  };
  return axios(config)
    .then(response => Promise.resolve(response))
    .catch(error => {
      handleError(error);
    });
}
function httpDelete (url, params) {
  const config = {
    method: 'delete',
    url: url,
    data: params,
    headers: { accessToken: sessionStorage.getItem('accessToken') || '' }
  };
  return axios(config)
    .then(response => Promise.resolve(response))
    .catch(error => {
      handleError(error);
    });
}

function httpGetForPagination (url, page, pagesize) {
  const config = {
    method: 'get',
    url: url,
    params: { page: page, pageSize: pagesize },
    headers: { accessToken: sessionStorage.getItem('accessToken') || '' }
  };
  return axios(config)
    .then(response => Promise.resolve(response))
    .catch(error => {
      handleError(error);
    });
}

function httpPostForPagination (url, page, pagesize, data) {
  const config = {
    method: 'post',
    url: url,
    params: { page: page, pageSize: pagesize },
    data: data,
    headers: { accessToken: sessionStorage.getItem('accessToken') || '' }
  };
  return axios(config)
    .then(response => Promise.resolve(response))
    .catch(error => {
      handleError(error);
    });
}

const config = {
  getApiUrl,
  getApplicationUrl,
  httpGet,
  httpPost,
  httpDelete,
  appDashboard,
  apiFetchProfile,
  httpGetForPagination,
  httpGetWithParams,
  httpPostForPagination,
  handleError,
  logout
};

export default config;
