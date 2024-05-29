/*global FB*/

import { useEffect } from "react";

const useFacebookSDK = (appId) => {
  useEffect(() => {
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function () {
        FB.init({
          appId,
          cookie: true,
          xfbml: true,
          version: "v11.0",
        });
      };

      (function (d, s, id) {
        let js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    };

    if (!window.FB) {
      loadFacebookSDK();
    }
  }, [appId]);
};

export default useFacebookSDK;
