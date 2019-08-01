import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';

import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'; 
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';

import './CustomEditor.scss';

const editorConfiguration = {
  ckfinder: {
    uploadUrl: "http://localhost:3000/v1/upload/image"
  },
  plugins: [ Essentials, Bold, Italic, Underline, Strikethrough, Paragraph, Alignment, 
    Heading, Highlight, Link, List, BlockQuote, 
    EasyImage, Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, 
    CKFinder, Autoformat, UploadAdapter, Table, TableToolbar, MediaEmbed, Indent],
  toolbar: [     
    'bold', 'italic', 'underline', 'strikethrough', 'highlight', '|', 
    'link', 'blockQuote', 'insertTable', 'mediaEmbed', 'imageUpload', '|',
    'numberedList', 'bulletedList', 'outdent', 'indent', 'alignment', '|',        
    'heading', '|', 
  ],  
  image: {
    toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative'
    ]
  },
  table: {
    contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
  },
  highlight: {
    options: [
      {
          model: 'redPen',
          class: 'pen-red',
          title: 'Red pen',
          color: 'var(--ck-highlight-pen-red)',
          type: 'pen'
      },
      {
          model: 'greenPen',
          class: 'pen-green',
          title: 'Green pen',
          color: 'var(--ck-highlight-pen-green)',
          type: 'pen'
      },
      {
          model: 'yellowMarker',
          class: 'marker-yellow',
          title: 'Yellow marker',
          color: 'var(--ck-highlight-marker-yellow)',
          type: 'marker'
      },
      {
          model: 'greenMarker',
          class: 'marker-green',
          title: 'Green marker',
          color: 'var(--ck-highlight-marker-green)',
          type: 'marker'
      },
      {
          model: 'pinkMarker',
          class: 'marker-pink',
          title: 'Pink marker',
          color: 'var(--ck-highlight-marker-pink)',
          type: 'marker'
      },
      {
          model: 'blueMarker',
          class: 'marker-blue',
          title: 'Blue marker',
          color: 'var(--ck-highlight-marker-blue)',
          type: 'marker'
      },
    ]
  },
  heading: {
    options: [
        { model: 'heading1', view: 'h1', title: '헤더1', class: 'ck-heading_heading1' },
        { model: 'heading2', view: 'h2', title: '헤더2', class: 'ck-heading_heading2' },
        { model: 'heading3', view: 'h3', title: '헤더3', class: 'ck-heading_heading3' },
        { model: 'paragraph', title: '본문', class: 'ck-heading_paragraph' },
    ]
  },
  placeholder: '내용을 입력해주세요.'
};

function CustomEditor(props) {
  return (    
    <div id="editor" className={props.isReadOnly ? 'view-mode' : 'write-mode'}>
      <CKEditor      
        editor={ props.isReadOnly ? InlineEditor : ClassicEditor }
        config={ editorConfiguration }
        data={props.data}
        onInit={ editor => {
          // You can store the "editor" and use when it is needed.
          console.log( 'Editor is ready to use!', editor );
          editor.isReadOnly = props.isReadOnly;          
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          props.onChange(data, editor);
          // console.log( { event, editor, data } );
        } }
        onBlur={ editor => {
          // console.log( 'Blur.', editor );
        } }
        onFocus={ editor => {
          // console.log( 'Focus.', editor );
        } }
      />
    </div>
  );
}

CustomEditor.defaultProps = {
  onChange: () => {
    // not to do
  }
};

export default CustomEditor;
