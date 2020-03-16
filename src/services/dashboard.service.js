import config from './config';

export default {
  getLogout,
  getTestApi
};

function getLogout () {
  const logout = config.getApiUrl('logout');
  return config.httpGet(logout);
}
function getTestApi () {
  const testApi = config.getApiUrl('testApi');
  return config.httpGet(testApi);
}