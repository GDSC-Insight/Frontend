import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, setCookie, removeCookies] = useCookies([
    "userToken",
    "corporationToken",
  ]);
  const navigator = useNavigate();

  const onlogoutButtonClickHandler = () => {
    removeCookies("userToken");
    removeCookies("corporationToken");
    navigator("/");
  };

  const onTitleClickHandler = () => {
    navigator("/");
  };

  const onSingInButtonClickHnadler = () => {
    navigator("/authselect");
  };

  const onSingUpButtonClickHnadler = () => {
    navigator("/signupselect");
  };

  const onUserMypageButtonClickHnadler = () => {
    navigator("/IndiMypage");
  };

  const onCorporMypageButtonClickHnadler = () => {
    navigator("/corporMypage");
  };

  return (
    <StyledHeader>
      <div className="header-title" onClick={onTitleClickHandler}>
        Myapp
      </div>
      <ButtonContainer>
        {!cookies.userToken && !cookies.corporationToken && (
          <>
            <Button onClick={onSingInButtonClickHnadler}>로그인</Button>
            <Button onClick={onSingUpButtonClickHnadler}>회원가입</Button>
          </>
        )}
        {cookies.userToken && (
          <>
            <Button onClick={onUserMypageButtonClickHnadler}>마이페이지</Button>
            <Button onClick={onlogoutButtonClickHandler}>로그아웃</Button>
          </>
        )}
        {cookies.corporationToken && (
          <>
            <Button onClick={onCorporMypageButtonClickHnadler}>
              마이페이지
            </Button>
            <Button onClick={onlogoutButtonClickHandler}>로그아웃</Button>
          </>
        )}
      </ButtonContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #ff4500; // Reddit orange
  color: #ffffff;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.div`
  background-color: #ffffff;
  color: #ff4500;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
