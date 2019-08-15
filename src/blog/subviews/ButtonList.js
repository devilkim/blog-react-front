import React from 'react';

import './scss/ButtonList.scss';

function ButtonList(props) {
  return (
    <div className='button-list'>
       {props.titles.map((title, index) => 
        <button className='small' key={index} onClick={() => {props.handleClickButton({title, index})}}>{title}</button>
        )}
    </div>
  );
}

export default ButtonList;