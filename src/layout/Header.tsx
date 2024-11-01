import styled from "styled-components";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    navigator("/userMypage");
  };

  const onCorporMypageButtonClickHnadler = () => {
    navigator("/corporMypage");
  };

  return (
    <StyledHeader>
      <div className="header-title" onClick={onTitleClickHandler}>
        Myapp
      </div>
      {!cookies.userToken && !cookies.corporationToken && (
        <div className="clickbutton-box">
          <div className="signin-button" onClick={onSingInButtonClickHnadler}>
            <div>로그인</div>
          </div>
          <div className="signup-button" onClick={onSingUpButtonClickHnadler}>
            <div>회원가입</div>
          </div>
        </div>
      )}
      {cookies.userToken && (
        <div className="clickbutton-box">
          <div
            className="signin-button"
            onClick={onUserMypageButtonClickHnadler}
          >
            <div>마이페이지</div>
          </div>
          <div className="signup-button" onClick={onlogoutButtonClickHandler}>
            <div>로그아웃</div>
          </div>
        </div>
      )}
      {cookies.corporationToken && (
        <div className="clickbutton-box">
          <div
            className="signin-button"
            onClick={onCorporMypageButtonClickHnadler}
          >
            <div>마이페이지</div>
          </div>
          <div className="signup-button" onClick={onlogoutButtonClickHandler}>
            <div>로그아웃</div>
          </div>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: orange;
  color: var(--primary-foreground);
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
`;
