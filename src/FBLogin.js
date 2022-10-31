import React, { useEffect } from "react";
const FBLogin = () => {
  // const FB = window.FB;
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "453569276891781",
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: "v15.0", // Use this Graph API version for this call.
      });

      window.FB.getLoginStatus(function (response) {
        // Called after the JS SDK has been initialized.
        statusChangeCallback(response); // Returns the login status.
      });
    };
  }, []);

  function statusChangeCallback(response) {
    // Called with the results from FB.getLoginStatus().
    console.log("statusChangeCallback");
    console.log(response); // The current login status of the person.
    if (response.status === "connected") {
      // Logged into your webpage and Facebook.
      testAPI();
      console.log("hello there in testApi");
    } else {
      // Not logged into your webpage or we are unable to tell.
      document.getElementById("status").innerHTML =
        "Please log " + "into this webpage.";
    }
  }

  function checkLoginState() {
    // Called when a person is finished with the Login Button.
    window.FB.getLoginStatus(function (response) {
      // See the onlogin handler
      console.log("FB login status response", response);
      statusChangeCallback(response);
    });
  }

  function testAPI() {
    // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log("Welcome!  Fetching your information.... ");
    window.FB.api("/me", function (response) {
      console.log("Successful login for: " + response.name);
      document.getElementById("status").innerHTML =
        "Thanks for logging in, " + response.name + "!";
    });
  }

  return (
    <>
      <a href="#" onClick={checkLoginState()}>
        Link to FB
      </a>
      {/* <fb:login-button
        scope="public_profile,email"
        onlogin={checkLoginState()}
      ></fb:login-button> */}

      <div id="status"></div>
    </>
  );
};
export default FBLogin;
