import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Title>My App</Title>
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
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;
