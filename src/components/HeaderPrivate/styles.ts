import styled from "styled-components";


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