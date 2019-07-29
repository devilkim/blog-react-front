import React, { useState } from 'react';
import TagList from './TagList';
import CustomEditor from './CustomEditor';

import './BlogForm.scss';

const BlogForm = (props) => {  
  const [title, setTitle] = useState(props.title === undefined ? '' : props.title);
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState(props.tags === undefined ? [] : props.tags);
  const [isPulblic, setIsPulblic] = useState(props.isPulblic === undefined ? true : props.isPulblic);
  const [contents, setContents] = useState(props.contents === undefined ? '' : props.contents);
  
  const handleKeyPress = (e) => {
    if (e.charCode !== 13) {
      return;
    }
    const newTags = JSON.parse(JSON.stringify(tags));
    const newTagTitle = e.target.value
    if (newTags.filter(item => newTagTitle === item.name).length !== 0) {
      alert('이미 추가한 태그입니다.');        
      return;
    } 
    newTags.push({name: newTagTitle});
    setTags(newTags);
    e.target.value = '';        
  };
  return (
    <table className='form'>
      <colgroup>
        <col width='20%'/>
        <col width='*'/>
      </colgroup>
      <tbody>
        <tr>
          <th>제목</th>
          <td>
            <input type='text' placeholder='제목을 입력해주세요.' defaultValue={title} onChange={e => setTitle(e.target.value)} />
          </td>
        </tr>
        <tr>
          <th>태그</th>
          <td>
            <input type='text' placeholder='태그를 입력해주세요.' defaultValue={tag} onChange={e => setTag(e.target.value)} onKeyPress={handleKeyPress} />
          </td>
        </tr>
        <tr className={tags.length === 0 ? 'hide' : 'show'}>
          <th>&nbsp;</th>
          <td>
            <TagList title='' data={tags} handleClickTag={(tag) => { props.handleClickTag(tag, [tags, setTags]) }}/>
          </td>
        </tr>
        <tr>
          <th>공개여부</th>
          <td>
            <label htmlFor='public-radio'>공개</label>
            <span>&nbsp;</span>
            <input name='display-radio' id='public-radio' type='radio' defaultChecked={isPulblic} onChange={e => setIsPulblic(true)} />
            <span>&nbsp;</span>
            <label htmlFor='private-radio'>비공개</label>
            <span>&nbsp;</span>
            <input name='display-radio' id='private-radio' type='radio' defaultChecked={!isPulblic} onChange={e => setIsPulblic(false)} />
          </td>
        </tr>
        <tr> 
          <th className='top'>내용</th>         
          <td>
            <CustomEditor data={contents} isReadOnly={false} onChange={data => {setContents(data)}} />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>&nbsp;</th>
          <td><button type='button' className='medium' onClick={() => {
            props.handleClickWrite(props.isNew, title, contents, tags, isPulblic);
          }}>작성</button></td>
        </tr>
      </tfoot>
    </table>
  );
}

BlogForm.defaultProps = {
  isNew: true,
  handleClickWrite: () => {  
    console.log('To do override.');
  }
}

export default BlogForm;
