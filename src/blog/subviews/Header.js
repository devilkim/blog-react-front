import React from 'react';
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import './scss/Header.scss';

function Header(props) {  
  return (
    <header>
      <Router />
      <h1 onClick={() => {props.history.push('/blog')}}>The devilkim`s blog</h1>
    </header>  
  );
}

export default withRouter(Header);
