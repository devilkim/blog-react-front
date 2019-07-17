import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './views/Home';
import This from './views/This';

import './assets/scss/reset.scss';
import './assets/scss/app.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/this" exact component={This} />
      </Router>
    </div>
  );
}

export default App;
