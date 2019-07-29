import React from 'react';
import BlogForm from '../subviews/BlogForm';
import Board from '../models/Board';

const BlogAddView = (props) => {   
  const addBoard = async (title, contents, tags, isPublic) => {
    const isSuccess = await Board.addBoard({title, contents, tags, isPublic});    
    if (!isSuccess) {
      alert('오류가 발생했습니다.');
    } else {
      alert('글이 등록되었습니다.');
      props.history.push('/');
    }    
  };
  return (
    <BlogForm
      handleClickTag={(tag, [tags, setTags]) => {
        const name = tag.name;
        setTags(tags.filter(tag => tag.name !== name));
      }}
      handleClickWrite={async (isNew, title, contents, tags, isPublic) => {
        const MIN_TITLE_LENGTH = 2;
        const MIN_TAGS_LENGTH = 1;
        const MIN_CONTENTS_LENGTH = 1;
        if (title.length < MIN_TITLE_LENGTH) {
          return alert('제목을 ' + MIN_TITLE_LENGTH + '글자 이상 입력해주세요.');
        }
        if (tags.length < MIN_TAGS_LENGTH) {
          return alert('태그를 ' + MIN_TAGS_LENGTH + '개 이상 입력해주세요.');
        }
        if (contents.length < MIN_CONTENTS_LENGTH) {
          return alert('내용을 입력해주세요.');
        }
        if (isNew) {
          addBoard(title, contents, tags, isPublic);
        } else {
          // To do
        }
      }}/>
  );
};

export default BlogAddView;
