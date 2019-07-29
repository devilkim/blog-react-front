import React, { useState, useEffect } from 'react';
import TagList from '../subviews/TagList';
import CustomEditor from '../subviews/CustomEditor';
import Board from '../models/Board';
import utils from '../utils';

import './BlogView.scss';

function BlogView(props) {  
  // const [no, setNo] = useState(0);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState([]);
  const [contents, setContents] = useState('');  

  const loadBoard = async (no) => {
    const board = await Board.board(no);    
    setTitle(board.title);
    setDate(board.date);
    setTags(board.tags);
    setContents(board.contents);    
  };
  useEffect(() => {            
    const no = utils.query(props.location.search, 'no');
    loadBoard(no);
  }, [props.location.search]);  
  return (
    <div className='view'>
      <h2>
        <span className='title'>
          {title}
        </span>
        <span className='date'>
          {date}
        </span>
      </h2>      
      <div className='tags'>
        <TagList title='' data={tags} handleClickTag={async (tag) => {                    
          console.log(tag);
        }}/>
        <div className='clear'></div>
      </div>      
      <div className='contents'>
        <CustomEditor data={contents} isReadOnly={true} />
      </div>      
    </div>
  );
}

export default BlogView;
