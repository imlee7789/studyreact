import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';

const Signup = () => {
  // const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({
      id, 
      nick, 
      password, 
      passwordCheck, 
      term
    });
  };

  // const onChangeId = (e) => {
  //   setId(e.target.value);
  // };

  const onChangeNick = (e) => {
    setNick(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  const onChangeTerm = (e) => {
    setTermError(false);
    setTerm(e.target.checked);
  };

  // Custom hooks ( 제로초강의 1-7 )
  // hook을 사용하기 위해서 useState와 onChange를 만들어야한다.
  // 아래와 같이 custom hook을 만들어 사용하면 반복을 줄일 수 있다.
  const useInput = () => {
    const [value, setter] = useState(initValue);
    const handler = (e) => {
      setter(e.target.value);
    };
    return [value, handler];
  }

  const [id, onChangeId] = useInput('');

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding:10 }}>
          <div>
            <label htmlFor="user-nick">아이디</label>
            <br />
            <Input name="user-id" required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input name="user-nick" required onChange={onChangeNick} />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" required onChange={onChangePassword} />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호체크</label>
            <br />
            <Input name="user-password-check" required onChange={onChangePasswordCheck} />
            {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
          </div>
          <div>
            <Checkbox name="user-term" value={term} onChange={onChangeTerm}>동의하세요</Checkbox>
            {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
          </div>
          <div sytle={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;