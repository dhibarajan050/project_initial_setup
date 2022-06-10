import React, { Suspense } from "react";

import "./App.css";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Navbar from "./Components/Nav/Navbar";
import NewForm from "./Components/NewForm";
import Sample from "./Components/Sample";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <>
      <Navbar />
      <UserDetails />
      {/* <NewForm
        onSubmit={({ firstname, lastname, jobtitle, department }) => {
          console.log(firstname, lastname, jobtitle, department);
        }}
      /> */}
    </>
  );
}

export default App;
