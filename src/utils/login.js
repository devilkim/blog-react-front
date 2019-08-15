import {Cookies} from 'react-cookie';

const cookies = new Cookies();
const TOKEN_KEY = 'blog-cookie-id';
const COOKIE_OPTIONS = {path: '/'};

const login = {  
  saveToken: (token) => cookies.set(TOKEN_KEY, token, COOKIE_OPTIONS),
  deleteToken: () => cookies.remove(TOKEN_KEY, COOKIE_OPTIONS),
  loadToken: () => cookies.get(TOKEN_KEY) === undefined ? null : cookies.get(TOKEN_KEY)
};

export default login;