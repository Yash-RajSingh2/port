import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  position: relative;
  margin: 0 60px 100px;
  @media (max-width: 1224px) {
    margin: 0 30px 100px;
  }
`;

export const MainContent = styled.main`
  margin: 0 60px;
  @media (max-width: 1000px) {
    margin: 0 10px;
  }
  @media (max-width: 500px) {
    margin: 0;
  }
`;
