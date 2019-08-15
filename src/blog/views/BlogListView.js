import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import BlogList from '../subviews/BlogList';
import Board from '../models/Board';

function BlogListView(props) {        
  const [boards, setBoards] = useState([]); 
  const handleClickItem = (type, item) => {
    if (type === 'item') {
      props.history.push('/blog/view?no=' + item.no);
    } else if (type === 'tag') {      
      props.history.push('/blog/tagblog?name=' + item.name);
    }
  }; 
  useEffect(() => {    
    (async () => {    
      const data = await Board.boardList();    
      setBoards(data);
    })();
  }, []);  
  return (
    <div>      
      <Router />
      <BlogList title='Recently' data={boards} handleClickItem={handleClickItem} />  
    </div>    
  );
}

export default withRouter(BlogListView);
