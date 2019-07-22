import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                onInit={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ editor => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ editor => {
                    console.log( 'Focus.', editor );
                } }
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default BlogForm;
