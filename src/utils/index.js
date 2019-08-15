const utils = {
  host: (path) => ('http://localhost:3000' + path),
  query: (search, key) => new URLSearchParams(search).get(key)
};
export default utils;
