import React from 'react';

import './scss/TagList.scss';

function TagList(props) {
  return (
    <div className='tag-list'>
        <span className='title'>{props.title}</span>
        <span>&nbsp;</span>
        {props.data.map((item, index) => 
          <span key={index} className='tag' onClick={() => {props.handleClickTag(item)}}>#{item.name}</span>
        )}
    </div>
  );
}

export default TagList;
