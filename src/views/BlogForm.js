import React from 'react';
import CKEditor from 'ckeditor4-react';

import './BlogForm.scss';

function BlogForm() {
  
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
            <input type='text' defaultValue='안녕하세요' />
          </td>
        </tr>
        <tr>
          <th>태그</th>
          <td>
            <input type='text' defaultValue='Hello world !!' />
          </td>
        </tr>
        <tr>
          <th>공개여부</th>
          <td>
            <label htmlFor='public-radio'>공개</label>
            <span>&nbsp;</span>
            <input name='display-radio' id='public-radio' type='radio' />
            <span>&nbsp;</span>
            <label htmlFor='private-radio'>비공개</label>
            <span>&nbsp;</span>
            <input name='display-radio' id='private-radio' type='radio' />
          </td>
        </tr>
        <tr> 
          <th className='top'>내용</th>         
          <td>
            <CKEditor
              data="<p>Hello from CKEditor 4!</p>" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BlogForm;
