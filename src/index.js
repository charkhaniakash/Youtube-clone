import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css'

ReactDOM.render(
  <Auth0Provider
    domain="dev-z2tgslk6ly7qm5eb.us.auth0.com"
    clientId="mnYoXmaaLPnNNDMOy4tWrwL6YFaOf6sY"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);