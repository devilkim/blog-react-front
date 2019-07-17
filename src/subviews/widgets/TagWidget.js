import React from 'react';

function TagWidget(props) {
  return (
    <div className='tag-widget'>
        <h2>{props.title}</h2>
        <ul>
          {props.data.map((item, index) => 
            <li key={index}><span onClick={() => {props.handleClickTag(item)}}>#{item.title}</span></li>  
          )}          
        </ul>
    </div>
  );
}

export default TagWidget;
