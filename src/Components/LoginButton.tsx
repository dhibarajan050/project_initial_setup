import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "./ Buttons/Button";
const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <Button
      handelClick={
        isAuthenticated
          ? () => logout({ returnTo: window.location.origin })
          : () => loginWithRedirect()
      }
      children={isAuthenticated ? "LOGOUT" : "LOGIN"}
    />
  );
};

export default LoginButton;
