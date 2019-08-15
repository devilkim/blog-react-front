import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Blog from './blog';

function App(props) {  

  return (
      <div id="app">
        <Router />
        <Switch>
            <Route path="/blog/:page?" exact component={Blog} />
            <Route path="/" exact component={Blog} />
          </Switch>
      </div>      
  );
}

export default withRouter(App);
