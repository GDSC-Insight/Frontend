import React, { ChangeEvent, useEffect, useState } from 'react'
import './CoporationAuth.css'
import InputBox from '../../../components/inputbox'

export default function CoporationAuth() {

    const [id, setId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');


    const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setId(value);
    };

    const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);
    };

    useEffect(() => {
        setMessage('');
    }, [id, password]);

  return (
    <div id='coporationauth-wrapper'>
        <div className='coporationauth-title'>기업 로그인</div>
        <div className='coporationauth-input-box'>
            <InputBox value={id} onChange={onIdChangeHandler} message='' messageError type='text' label='아이디' placeholder='아이디를 입력해주세요.'/>
            <InputBox value={password} onChange={onPasswordChangeHandler} message={message} messageError type='password' label='비밀번호' placeholder='비밀번호를 입력해주세요.'/>
        </div>
    </div>
  )
}
