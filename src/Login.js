import React from "react";
import "./Login.css";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="login">
      <h1>Please login </h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
}

export default Login;
