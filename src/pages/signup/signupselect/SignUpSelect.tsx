import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignUpSelect() {
  const navigator = useNavigate();

  const onClickCoporation = () => {
    navigator("/coporationsignup");
  };

  const onClickUser = () => {
    navigator("/usersignup");
  };

  return (
    <SignUpSelectWrapper>
      <SelectBox className="corporation" onClick={onClickCoporation}>
        <SelectText>기업</SelectText>
      </SelectBox>
      <SelectBox className="user" onClick={onClickUser}>
        <SelectText>개인</SelectText>
      </SelectBox>
    </SignUpSelectWrapper>
  );
}

const SignUpSelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SelectBox = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #007bff;
  border-radius: 10px;
  margin: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.05);
  }

  &.corporation {
    color: #007bff;
  }

  &.user {
    color: #28a745;
  }
`;

const SelectText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
