import config from './config';

export default {
  gettestapi
};

function gettestapi (api) {
  const testapi = config.getApiUrl(api);
  return config.httpGet(testapi);
}
