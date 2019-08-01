import React, { useState, useEffect } from 'react';
import BlogList from '../subviews/BlogList';
import Board from '../models/Board';
import utils from '../utils';

import './TagBlogListView.scss';

function TagBlogListView(props) {        
  const tagName = utils.query(props.location.search, 'name');
  const [boards, setBoards] = useState([]);  
  const loadBoards = async (tagName) => {       
    const data = await Board.boardListByTag(tagName);    
    setBoards(data);
  };

  const handleClickItem = (type, item) => {
    if (type === 'item') {
      props.history.push('/view?no=' + item.no);
    } else if (type === 'tag') {
      props.history.push('/blogs/tag?name=' + item.name);
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
    loadBoards(tagName);
  }, [tagName]);  

  return (
    <div>      
      <BlogList 
        title={createTitle(tagName)} 
        data={boards} 
        handleClickItem={handleClickItem} 
        />  
    </div>    
  );
}

export default TagBlogListView;
