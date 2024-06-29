import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/authOperations";
import { useAuth } from "../../hooks/useAuth.js";
import * as SC from "./Navigation.styled.js";

export const Navigation = () => {
  const { isLoggedIn, user } = useAuth();
  
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <SC.Nav>
      <SC.NavList>
        {isLoggedIn && (
          <SC.NavItem>
            <SC.StyledNavLink to="phonebook">PhoneBook</SC.StyledNavLink>
          </SC.NavItem>
        )}
        <SC.NavItem>
          <SC.StyledNavLink to="/">Home</SC.StyledNavLink>
        </SC.NavItem>
        {!isLoggedIn && (
          <>
            <SC.NavItem>
              <SC.StyledNavLink to="login">Login</SC.StyledNavLink>
            </SC.NavItem>
            <SC.NavItem>
              <SC.StyledNavLink to="register">Register</SC.StyledNavLink>
            </SC.NavItem>
          </>
        )}
      </SC.NavList>
      {isLoggedIn && (
        <>
          <SC.LogoutButton type="button" onClick={handleLogout}>
            Logout
          </SC.LogoutButton>
          <p>{user.name}</p>
        </>
      )}
    </SC.Nav>
  );
};

export default Navigation;
