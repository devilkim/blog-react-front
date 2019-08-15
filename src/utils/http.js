import axios from 'axios';
import login from './login';
const http = {};

const configSetting = (config) => {
  const token = login.loadToken();
  if (config.headers === undefined) {
    config.headers = {};
  }
  if (token !== null) {    
    config.headers['authorization'] = 'Bearer ' + token;
  }   
  return config;
};

const headerJson = (config) => {
  config.headers['content-type'] = 'application/json';
  return config;
}

const handleError = (e) => {
  if (e.response === undefined) {
    console.error(e);
  } else {    
    if (e.response.status === 401) {
      alert('관리 권한이 있는 사용자만 이용할 수 있습니다.');
    } else {
      alert('오류가 발생했습니다.');
      console.error(e.response.data.message);
    }    
  }
};

http.get = async (host, config = {}) => {
  try {      
    const response = await axios.get(host, configSetting(config));
    return response;
  } catch (e) {
    handleError(e);
  }
};

http.post = async (host, data = {}, config = {}) => {
  try {  
    const response = await axios.post(host, data, headerJson(configSetting(config)));
    return response;
  } catch (e) {
    handleError(e);
  }
};

http.put = async (host, data = {}, config = {}) => {
  try {
    const response = await axios.put(host, data, headerJson(configSetting(config)));
    return response;
  } catch (e) {
    handleError(e);
  }
};

http.delete = async (host, config = {}) => {
  try {
    const response = await axios.delete(host, configSetting(config));
    return response;
  } catch (e) {
    handleError(e);
  }
};


export default http;