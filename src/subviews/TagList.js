import React from 'react';

import './TagList.scss';

function TagList(props) {
  return (
    <div className='tag-list'>
        <span className='title'>{props.title}</span>
        <span>&nbsp;</span>
        {props.data.map((item, index) => 
          <span className='tag' onClick={() => {props.handleClickTag(item)}}>#{item.title}</span>
        )}
    </div>
  );
}

export default TagList;
