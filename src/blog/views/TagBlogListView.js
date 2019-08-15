import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import BlogList from '../subviews/BlogList';
import Board from '../models/Board';
import utils from '../../utils';

function TagBlogListView(props) {          
  const tagName = utils.query(props.location.search, 'name');
  const [boards, setBoards] = useState([]);    
  const handleClickItem = (type, item) => {
    if (type === 'item') {
      props.history.push('/blog/view?no=' + item.no);
    } else if (type === 'tag') {
      props.history.push('/blog/tagblog?name=' + item.name);
    }    
  };
  const createTitle = (tagName) => {
    return (
      <span>
        <span className='title'>Tag: </span>
        <span className='tag'>#{tagName}</span>
      </span>
    );
  }
  useEffect(() => {    
    (async (tagName) => {       
      const data = await Board.boardListByTag(tagName);    
      setBoards(data);
    })(tagName);
  }, [tagName]);  
  return (
    <div>       
      <Router />
      <BlogList 
        title={createTitle(tagName)} 
        data={boards} 
        handleClickItem={handleClickItem} 
        />  
    </div>    
  );
}

export default withRouter(TagBlogListView);