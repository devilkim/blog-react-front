import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './views/Home';
import BlogForm from './views/BlogForm';

import TagList from './subviews/TagList';
import ButtonList from './subviews/ButtonList';

import './App.scss';

function App() {
  const tags = [
    {no: 1, title: '넥슨'}, 
    {no: 1, title: '넥라'}, 
    {no: 1, title: 'docker'}, 
    {no: 1, title: 'elk'}
  ];
  return (
    <div id="app">
      <header>
        <h1>The devilkim`s blog</h1>
      </header>        
      <section>
        <TagList title='Tags' data={tags} handleClickTag={(tag) => {console.log(tag)}} />
        <ButtonList titles={['Write']} handleClickButton={index => {}}/>
      </section>
      <main>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/form" exact component={BlogForm} />
        </Router>
      </main>      
      <aside>
        
      </aside>
      <div className='clear'></div>        
      <footer>
        <h1>Copyright 2019. devilkim. All rights reserved.</h1>
      </footer>
    </div>
  );
}

export default App;
