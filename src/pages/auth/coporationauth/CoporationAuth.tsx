import React, { ChangeEvent, useEffect, useState } from "react";
import InputBox from "../../../components/inputbox";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";

export default function CoporationAuth() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [cookies, setCookie] = useCookies([
    "corporationToken"
  ]);

  const navigator = useNavigate();

  const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setId(value);
  };

  const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  const onSignInButtonHandler = () => {
    if (!id || !password) return;

    if (id === 'qwer1234' && password === 'qwer1234'){
      setCookie('corporationToken', 'corporationToken')
      navigator('/')
      return;
    }
  };

  const onSignUpButtonHandler = () => {
    navigator("/coporationsignup");
  };

  useEffect(() => {
    setMessage("");
  }, [id, password]);

  return (
    <Wrapper>
      <Title>기업 로그인</Title>
      <InputBoxContainer>
        <InputBox
          value={id}
          onChange={onIdChangeHandler}
          message=""
          messageError
          type="text"
          label="아이디"
          placeholder="아이디를 입력해주세요."
        />
        <InputBox
          value={password}
          onChange={onPasswordChangeHandler}
          message={message}
          messageError
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
        />
      </InputBoxContainer>
      <ButtonBox>
        <SignInButton onClick={onSignInButtonHandler}>로그인</SignInButton>
        <SignUpButton onClick={onSignUpButtonHandler}>회원가입</SignUpButton>
      </ButtonBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
`;

const InputBoxContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SignInButton = styled.button`
  background-color: #0079d3;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: #005f99;
  }
`;

const SignUpButton = styled(SignInButton)`
  background-color: transparent;
  color: #0079d3;
  border: 1px solid #0079d3;
  margin-top: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;
