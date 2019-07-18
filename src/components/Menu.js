import React from 'react';

function Menu(props) {
  return (
    <menu>
        <div className='background'>          
          {props.children}
        </div>        
    </menu>
  );
}

export default Menu;