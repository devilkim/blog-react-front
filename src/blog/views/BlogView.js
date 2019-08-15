import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import TagList from '../subviews/TagList';
import CustomEditor from '../../utils/CustomEditor';
import Board from '../models/Board';
import utils from '../../utils';

import './scss/BlogView.scss';

function BlogView(props) {    
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState([]);
  const [contents, setContents] = useState('');  
  
  useEffect(() => {            
    const no = utils.query(props.location.search, 'no');
    (async (no) => {
      const board = await Board.board(no);
      if (board === null) {
        props.history.replace('/blog');
        return;
      }
      setTitle(board.title);
      setDate(board.date);
      setTags(board.tags);
      setContents(board.contents);    
    })(no);
  }, [props.location.search, props.history]);  
  return (
    <div className='view'>
      <Router />
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
export default withRouter(BlogView);
