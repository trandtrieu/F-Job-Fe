/*global FB*/

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const LoginV2 = () => {
  const history = useHistory();

  useEffect(() => {
    const initFacebookSDK = () => {
      window.fbAsyncInit = function () {
        FB.init({
          appId: "705698308430888",
          cookie: true,
          xfbml: true,
          version: "v11.0",
        });
      };

      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    };
    testAPI();
    // Khởi tạo SDK của Facebook khi component được tạo ra
    initFacebookSDK();
  }, []);

  const checkLoginState = () => {
    FB.getLoginStatus(function (response) {
      statusChangeCallback(response);
    });
  };
  const testAPI = () => {
    console.log("Welcome!  Fetching your information.... ");
    FB.api("/me", function (response) {
      console.log("Successful login for: " + response.name);
      // document.getElementById("status").innerHTML =
      //   "Thanks for logging in, " + response.name + "!";
    });
  };
  const statusChangeCallback = (response) => {
    if (response.status === "connected") {
      toast.success("Logged in with Facebook!");
      //   history.push("/dashboard");
    } else {
      toast.error("Failed to log in with Facebook.");
    }
  };

  const handleFacebookLogin = () => {
    FB.login(checkLoginState, { scope: "public_profile,email" });
  };

  return (
    <div className="login-section">
      <h1>Login Page</h1>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
};

export default LoginV2;
