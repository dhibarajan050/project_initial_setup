import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "./ Buttons/Button";
const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      handelClick={() => logout({ returnTo: window.location.origin })}
      children="LogoutButton"
    />
  );
};

export default LogoutButton;
