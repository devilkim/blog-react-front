import React from 'react';

function Container({children}) {
  return (
    <div className='main-container'>
        {children}
        <div className='clear'></div>
    </div>
  );
}

export default Container;
