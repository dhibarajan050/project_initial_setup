import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDetails = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently }: any =
    useAuth0();

  useEffect(() => {
    if (user) {
      const notify = () =>
        toast.success("Successfully Logged In", {
          position: "top-right",
          theme: "dark",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      notify();
    }
  }, [user]);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-zefh3hvz.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
        console.log("accessToken", accessToken);
        return accessToken;
      } catch (error) {
        console.log("error", error);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently]);

  console.log(
    "user,isAuthenticated,isLoading",
    user,
    isAuthenticated,
    isLoading
  );

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {isAuthenticated && (
        <div>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
