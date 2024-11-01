import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const Layout = () => {
  return (
    <Container>
      <StickyHeader>
        <Header />
      </StickyHeader>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: #f8f9fa;
`;
