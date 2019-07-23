import React from 'react';
import TagList from '../subviews/TagList';

import './BlogView.scss';

function BlogView() {
  const data = {no: 10, title: '검색포털 시스템 아키텍처', date: '19.07.03(금)', tags: [{no: 1, title: 'elk'}, {no: 1, title: 'appsearch'}], contents: `<h1 class="contentHeader1">Trabb Pardo&ndash;Knuth Algorithm</h1>

  <p>The <strong>Trabb Pardo&ndash;Knuth algorithm</strong> is a <a href="http://en.wikipedia.org/wiki/Computer_program">program</a> introduced by <a href="http://en.wikipedia.org/wiki/Donald_Knuth">Donald Knuth</a> and <a href="http://en.wikipedia.org/w/index.php?title=Luis_Trabb_Pardo">Luis Trabb Pardo</a> to illustrate the evolution of computer programming languages. In their 1977 work &quot;The Early Development of Programming Languages&quot;, Trabb Pardo and Knuth introduced a trivial program which involved arrays, indexing, mathematical functions, subroutines, I/O, conditionals and iteration. They then wrote implementations of the algorithm in several early programming languages to show how such concepts were expressed. The simpler <a href="http://en.wikipedia.org/wiki/Hello_world_program">Hello world program</a> has been used for much the same purpose.</p>
  
  <h2 class="contentHeader2">The Algorithm</h2>
  
  <pre class="formattedCode">
  ask for 11 numbers to be read into a sequence S
  reverse sequence S
  for each item in sequence S
      call a function to do an operation
      if result overflows
          alert user
      else
          print result</pre>
  
  <p>The algorithm reads eleven numbers from an input device, stores them in an array, and then processes them in reverse order, applying a user-defined function to each value and reporting either the value of the function or a message to the effect that the value has exceeded some threshold.</p>
  
  <hr />
  <p><small>Source: <a href="http://en.wikipedia.org/wiki/Trabb_Pardo%E2%80%93Knuth_algorithm">Wikipedia.org</a></small></p>`};
  // console.log(Bold);
  return (
    <div className='view'>
      <h2>
        <span className='title'>
          {data.title}
        </span>
        <span className='date'>
          {data.date}
        </span>
      </h2>      
      <div className='tags'>
        <TagList title='' data={data.tags} handleClickTag={(tag) => {console.log(tag)}}/>
        <div className='clear'></div>
      </div>      
      <div className='contents'>
       
      </div>      
    </div>
  );
}

export default BlogView;
