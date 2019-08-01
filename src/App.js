import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import BlogListView from './views/BlogListView';
import TagBlogListView from './views/TagBlogListView';
import BlogAddView from './views/BlogAddView';
import BlogView from './views/BlogView';

import TagList from './subviews/TagList';
import ButtonList from './subviews/ButtonList';

import Board from './models/Board';

import './App.scss';

function App(props) {  
  const [tags, setTags] = useState([]);
  
  const loadTags = async () => {
    const tags = await Board.tagListByBest();
    setTags(tags);
  };

  const handleClickTag = (tag) => {
    props.history.push('/blogs/tag?name=' + tag.name);
  };
  
  useEffect(() => {
    loadTags();
  }, []);

  return (
      <div id="app">
        <Router />
        <header>
          <h1 onClick={() => {props.history.push('/')}}>The devilkim`s blog</h1>
        </header>        
        <section>
          <TagList title='Tags' data={tags} handleClickTag={handleClickTag} />
          <ButtonList titles={['Write']} handleClickButton={index => {props.history.push('/add')}}/>
        </section>
        <main>          
          <Switch>
            <Route path="/blogs" exact component={BlogListView} />
            <Route path="/blogs/tag" exact component={TagBlogListView} />
            <Route path="/add" component={BlogAddView} />
            <Route path="/view" component={BlogView} />
            <Route path="/" exact component={BlogListView} />
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
