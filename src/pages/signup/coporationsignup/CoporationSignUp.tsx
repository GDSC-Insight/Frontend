import { ChangeEvent, useEffect, useState } from "react";
import "./CoporationSignUp.css";
import InputBox from "../../../components/inputbox";
import { useNavigate } from "react-router-dom";

export default function CoporationSignUp() {
  const [id, setId] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [telNumber, setTelNumber] = useState<string>("");
  const [authBusinessNumber, setAuthBusinessNumber] = useState<string>("");
  const [authNumber, setAuthNumber] = useState<string>("");
  const [authNumberMessage, setAuthNumberMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordCheckMessage, setPasswordCheckMessage] = useState<string>("");

  const [passwordCheckMessageError, setPasswordCheckMessageError] =
    useState<boolean>(false);
  const [idMessageError, setIdMessageError] = useState<boolean>(false);
  const [telNumberMessageError, setTelNumberMessageError] =
    useState<boolean>(false);
  const [passwordMessageError, setPasswordMessageError] =
    useState<boolean>(false);
  const [authNumberMessageError, setAuthNumberMessageError] =
    useState<boolean>(false);
  const [isCheckedId, setCheckedId] = useState<boolean>(false);
  const [isMatchedPassword, setMatchedPassword] = useState<boolean>(false);
  const [isCheckedPassword, setCheckedPassword] = useState<boolean>(false);
  const [isSend, setSend] = useState<boolean>(false);
  const [isCheckedAuthNumber, setCheckedAuthNumber] = useState<boolean>(false);

  const navigator = useNavigate();

  const onSignUpButtonHandler = () => {
    navigator("");
  };

  // event handler: 변경 이벤트 처리 //
  const onIdChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setId(value);
  };

  const onPasswordCheckChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setPasswordCheck(value);
  };

  const onNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  const onAddressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAddress(value);
  };

  const onTelNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTelNumber(value);
  };

  const onAuthBusinessNumberChangeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setAuthBusinessNumber(value);

    const pattern = /^(?=.*[0-9])$/;
    const isMatched = pattern.test(value);

    const message = isMatched || !value ? "" : "숫자만 입력해 주세요";
    setPasswordMessage(message);
    setPasswordMessageError(!isMatched);
    setMatchedPassword(isMatched);
  };

  const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);

    const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,13}$/;
    const isMatched = pattern.test(value);

    const message =
      isMatched || !value ? "" : "영문, 숫자를 혼용하여 8 ~ 13자 입력해주세요";
    setPasswordMessage(message);
    setPasswordMessageError(!isMatched);
    setMatchedPassword(isMatched);
  };

  const onAuthNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAuthNumber(value);
    setCheckedAuthNumber(false);
    setAuthNumberMessage("");
  };

  const onAuthNumberCheckClickHandler = () => {
    if (!authNumber) return;
  };
  // effect: 비밀번호 및 비밀번호 확인 변경 시 실행할 함수 //
  useEffect(() => {
    if (!password || !passwordCheck) return;

    const isEqual = password === passwordCheck;
    const message = isEqual ? "" : "비밀번호가 일치하지 않습니다.";
    setPasswordCheckMessage(message);
    setPasswordCheckMessageError(!isEqual);
    setCheckedPassword(isEqual);
  }, [password, passwordCheck]);

  return (
    <div id="userauth-wrapper">
      <div className="userauth-title">기업 회원 가입</div>
      <div className="userauth-input-box">
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
          messageError={idMessageError}
          type="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
        />
        <InputBox
          value={passwordCheck}
          onChange={onPasswordCheckChangeHandler}
          message={message}
          messageError={passwordMessageError}
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 한번더 입력해주세요."
        />
        <InputBox
          value={name}
          onChange={onNameChangeHandler}
          message={message}
          messageError
          type="text"
          label="이름"
          placeholder="이름을 입력해주세요."
        />
        <InputBox
          value={address}
          onChange={onAddressChangeHandler}
          message={message}
          messageError
          type="text"
          label="주소"
          placeholder="주소를 입력해주세요."
        />
        <InputBox
          value={telNumber}
          onChange={onTelNumberChangeHandler}
          message={message}
          messageError
          type="text"
          label="휴대폰번호"
          placeholder="전화번호를 입력해주세요."
          buttonName="인증하기"
        />
        {isSend && (
          <InputBox
            messageError={authNumberMessageError}
            message={authNumberMessage}
            value={authNumber}
            label="인증번호"
            type="text"
            placeholder="인증번호 4자리를 입력해주세요."
            buttonName="인증 확인"
            onChange={onAuthNumberChangeHandler}
            onButtonClick={onAuthNumberCheckClickHandler}
          />
        )}
        <InputBox
          value={authBusinessNumber}
          onChange={onAuthBusinessNumberChangeHandler}
          message={message}
          messageError
          type="text"
          label="사업자 번호 인증"
          placeholder="사업자번호를 입력해주세요."
          buttonName="인증하기"
        />
      </div>
      <div className="usersignup-button-box">
        <button className="usersignup-button" onClick={onSignUpButtonHandler}>
          회원가입 완료
        </button>
      </div>
    </div>
  );
}
