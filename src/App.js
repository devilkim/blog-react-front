import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Home from './views/Home';
import BlogAddView from './views/BlogAddView';
import BlogView from './views/BlogView';

import TagList from './subviews/TagList';
import ButtonList from './subviews/ButtonList';

import './App.scss';

function App(props) {
  const tags = [
    {no: 1, name: '넥슨'}, 
    {no: 1, name: '넥라'}, 
    {no: 1, name: 'docker'}, 
    {no: 1, name: 'elk'}
  ];  
  return (        
      <div id="app">
        <Router />
        <header>
          <h1 onClick={() => {props.history.push('/')}}>The devilkim`s blog</h1>
        </header>        
        <section>
          <TagList title='Tags' data={tags} handleClickTag={(tag) => {console.log(tag)}} />          
          <ButtonList titles={['Write']} handleClickButton={index => {props.history.push('/add')}}/>
        </section>
        <main>          
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={BlogAddView} />
            <Route path="/view" component={BlogView} />
          </Switch>           
        </main>      
        <aside>
          &nbsp;
        </aside>
        <div className='clear'></div>        
        <footer>
          <h1>Copyright 2019. <a href='mailto:devilkim36@gmail.com'>devilkim</a>. All rights reserved.</h1>
        </footer>
      </div>      
  );
}

export default withRouter(App);
