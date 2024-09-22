import styled, { createGlobalStyle } from 'styled-components';

// Estilos globais
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    position: relative;
  }

  body {
    background-color: #fcfbff;
    display: flex;
    justify-content: center;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: lightgray;
  }
`;

// Main Container
export const Main = styled.main`
  width: 1120px;
`;

// HEADER STYLES
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #fcfbff;
  box-shadow: 0 1px 0 #ececec;
  max-width: 1120px;
  width: 100%;
`;

export const NavList = styled.nav`
  display: flex;
  gap: 30px;
`;

export const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

// HOME STYLES
export const HomeSection = styled.section`
  height: calc(100vh + 80px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 20px;
  width: 100%;
`;

export const HomeInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: justify;
`;

export const HomeButtonLink = styled.a`
  color: white;
`;

export const HomeButton = styled.button`
  &:hover {
    opacity: 1;
  }
`;

// FOOTER STYLES
export const Footer = styled.footer`
  box-shadow: 0px -1px 0px 0px #ececec;
  padding: 50px;
  text-align: center;
`;
