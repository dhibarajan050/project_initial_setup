import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dev-zefh3hvz.us.auth0.com"
    clientId="xnaVNrxnz3LBdXaxQZSMhQA9w5mX7OqU"
    redirectUri={window.location.origin}
    audience="https://dev-zefh3hvz.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
