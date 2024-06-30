import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f8f9fa;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;

  &.active {
    color: #0056b3;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoutButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
export const UserSection = styled.div`
  display: flex;
  align-items: center;
  

  p {
    margin-right: 15px;
    margin-left: 15px;
    font-weight: bold;
  }
`;
