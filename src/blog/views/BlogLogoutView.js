import React from 'react';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import login from '../../utils/login';


function BlogLogoutView(props) {
  login.deleteToken();
  props.history.replace('/blog');
  return (
    <div className='login-view-container'>
      <Router />
    </div>    
  );
}

export default withRouter(BlogLogoutView);
