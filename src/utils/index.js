const utils = {
  host: (path) => ('http://localhost:3000' + path),
  query: (search, key) => {
    const params = new URLSearchParams(search);    
    return params.get(key);
  }
};
export default utils;
