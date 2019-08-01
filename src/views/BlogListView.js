import React, { useState, useEffect } from 'react';
import BlogList from '../subviews/BlogList';
import Board from '../models/Board';

function BlogListView(props) {        
  const [boards, setBoards] = useState([]);
  
  const loadBoards = async () => {    
    const data = await Board.boardList();    
    setBoards(data);
  };

  const handleClickItem = (type, item) => {
    if (type === 'item') {
      props.history.push('/view?no=' + item.no);
    } else if (type === 'tag') {      
      props.history.push('/blogs/tag?name=' + item.name);
    }    
  };
  
  useEffect(() => {    
    loadBoards();
  }, []);  
  return (
    <div>      
      <BlogList title='Recently' data={boards} handleClickItem={handleClickItem} />  
    </div>    
  );
}

export default BlogListView;
