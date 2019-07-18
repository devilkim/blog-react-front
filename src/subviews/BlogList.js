import React from 'react';

import './BlogList.scss';

function TagItem(props) {    
    return (
      <span onClick={() => {props.handleClickItem(props.data)}}>
          #{props.data.title}
      </span>
    );
  }

function BlogItem(props) {
    return (
        <li>
            <div className='main'>
                <span className='title' onClick={() => {props.handleClickItem('item', props.data)}}>{props.data.title}</span>
                <span className='tags'>
                    {
                        props.data.tags.map((item, index) => 
                            <TagItem key={index} data={item} handleClickItem={(tag) => {props.handleClickItem('tag', tag)}} />
                        )
                    }
                </span>
            </div>
            <div className='sub'>
                {props.data.date}
            </div>
        </li>
    );
}

function BlogList(props) {
    return (
        <div className='main-list'>
            <h2>{props.title}</h2>
            <ul>
                {props.data.map((item, index) => 
                    <BlogItem key={index} data={item} handleClickItem={props.handleClickItem} />
                )}
            </ul>
        </div>
    );
}

BlogList.defaultProps = {
    handleClickItem: () => {

    }
};

export default BlogList;
