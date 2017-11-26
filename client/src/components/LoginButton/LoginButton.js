import React, { Component } from "react";
import "./LoginButton.css";

class LoginButton extends Component {
    
    constructor(props){
    super(props); 
    this.handleClick = this.handleClick.bind(this);
    this.fbLogOut = this.fbLogOut.bind(this);
    }

    componentDidMount() {

      localStorage.clear();
      console.log("Cleared!");

      window.fbAsyncInit = function() {
        window.FB.init({
          appId      : "124126441638491",
          cookie     : true,  // enable cookies to allow the server to access
                            // the session
          xfbml      : true,  // parse social plugins on this page
          version    : 'v2.10' // use version 2.1
          });
    
        // Now that we've initialized the JavaScript SDK, we call
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.
        window.FB.getLoginStatus(function(response) {
          this.statusChangeCallback(response);
          
          }.bind(this));
        }.bind(this);
    
      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    testAPI() {
      console.log('Welcome!  Fetching your information.... ');
      window.FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      const logButton = document.getElementById('loginButton')
      console.log(logButton);
      logButton.innerHTML = response.name;
      console.log("Get Element By ID");
      document.createElement("BUTTON").innerHTML = "Logout";
      const USER = response.name;
      localStorage.setItem(`USER`, USER);
      });
    }
    
    // This is called with the results from from FB.getLoginStatus().
    statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        this.testAPI();
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
       
      }
    }
    
    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    checkLoginState() {
      window.FB.getLoginStatus(function(response) {
        this.statusChangeCallback(response);
      }.bind(this));
    }
    
    handleClick() {
      window.FB.login(this.checkLoginState());
    }

    fbLogOut() {
      window.FB.logout(function(response) {
      // user is now logged out
      console.log("logout successful!");
      localStorage.clear();
      });
    }

    render() {

    return (
        <div>
          <div>
            <a  id="loginButton" onClick={this.handleClick}>Login</a>
          </div>
        </div>);
    }
}

export default LoginButton;
