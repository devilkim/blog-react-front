import React from 'react';

import './ButtonList.scss';

function ButtonList(props) {
  return (
    <div className='button-list'>
       {props.titles.map((title, index) => 
        <button onClick={() => {props.handleClickButton({title, index})}}>{title}</button>
        )}
    </div>
  );
}

export default ButtonList;
