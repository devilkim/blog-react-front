import React, { useEffect } from 'react';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import LoginForm from '../subviews/LoginForm';
import Admin from '../models/Admin';
import login from '../../utils/login';

import './scss/BlogLoginView.scss';

function BlogLoginView(props) {
  useEffect(() => {    
    (async () => {    
      const isAuth = await Admin.checkLogin();    
      if (isAuth) {
        props.history.replace('/blog');
      }
    })();
  }, [props.history]);  
  return (
    <div className='login-view-container'> 
      <Router />
      <LoginForm handleClickLogin={async (account, password)=> {
        const data = await Admin.login(account, password);
        if (!data.isSuccess) {
          alert(data.message);
        } else {          
          login.saveToken(data.data.token);
          props.history.push('/blog');
        }        
      }} /> 
    </div>    
  );
}

export default withRouter(BlogLoginView);
