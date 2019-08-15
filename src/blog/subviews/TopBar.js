import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import TagList from './TagList';
import ButtonList from './ButtonList';
import login from '../../utils/login';

import Board from '../models/Board';

import './scss/TopBar.scss';

function TopBar(props) {
  const [tags, setTags] = useState([]);
  const handleClickTag = (tag) => {
    props.history.push('/blog/tagblog?name=' + tag.name);
  };
  const loginArea = () => {
    if (login.loadToken() === null) {
      return <span>&nbsp;</span>;
    } else {
      return <ButtonList titles={['Write']} handleClickButton={index => {props.history.push('/blog/add')}}/>;
    }    
  }
  useEffect(() => {
    (async () => {
      const tags = await Board.tagListByBest();
      setTags(tags);
    })();
  }, []);  
  return (
    <section>
      <Router />
      <TagList title='Tags' data={tags} handleClickTag={handleClickTag} />         
      {loginArea()}      
    </section>
  );
}

export default withRouter(TopBar);
