import React from 'react';
import BlogListView from './views/BlogListView';
import TagBlogListView from './views/TagBlogListView';
import BlogAddView from './views/BlogAddView';
import BlogView from './views/BlogView';
import BlogLoginView from './views/BlogLoginView';
import BlogLogoutView from './views/BlogLogoutView';

import Header from './subviews/Header';
import Footer from './subviews/Footer';
import TopBar from './subviews/TopBar';
import SideBar from './subviews/SideBar';

import './scss/index.scss';

function App(props) {  
  const page = props.match.params.page;  
  
  const route = () => {
    switch (page) {
      case 'list':
        return <BlogListView />;
      case 'add':
        return <BlogAddView />;
      case 'view':
        return <BlogView />;
      case 'tagblog':
        return <TagBlogListView />;
      case 'private':
        return <BlogLoginView />;
      case 'public':
        return <BlogLogoutView />;
      default:
        return <BlogListView />;
    }      
  }

  return (
    <div>        
      <Header />
      <TopBar />           
      <main>{route()}</main>       
      <SideBar />   
      <div className='clear'></div>        
      <Footer/>
    </div>      
  );
}

export default App;
