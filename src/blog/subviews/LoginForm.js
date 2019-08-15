import React, { useState } from 'react';

import './scss/LoginForm.scss';

function LoginForm(props) {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const handleKeyPressPassword = (e) => {
    if (e.key === 'Enter') {
      props.handleClickLogin(account, password);
    }    
  }; 

  return (
    <table className='form'>
      <colgroup>
        <col width='20%'/>
        <col width='*'/>
      </colgroup>
      <tbody>
        <tr>
          <th>계정</th>
          <td>
            <input type='text' placeholder='계정을 입력해주세요.' defaultValue={account} onChange={e => setAccount(e.target.value)} />
          </td>
        </tr>
        <tr>
          <th>비밀번호</th>
          <td>
            <input type='password' placeholder='비밀번호를 입력해주세요.' defaultValue={password} onChange={e => setPassword(e.target.value)} onKeyPress={handleKeyPressPassword} />
          </td>
        </tr> 
      </tbody>
      <tfoot>
        <tr>          
          <td colSpan='2'><button type='button' className='medium' onClick={() => {
            props.handleClickLogin(account, password);            
          }}>로그인</button></td>
        </tr>
      </tfoot>
    </table>
  );
}

LoginForm.defaultProps = {  
  handleClickLogin: () => {  
    console.log('To do override.');
  }
}

export default LoginForm;
