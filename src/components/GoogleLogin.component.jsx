import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { connect } from "react-redux";

const GoogleAuth = (props) => {
  return (
    <div>
      {props.user.access_token != null ? (
        <GoogleLogout
          buttonText='Logout'
          onLogoutSuccess={props.clearInfo}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId='324526023160-ub5osktrtf0jelldb7qhbn03sbkismq8.apps.googleusercontent.com'
          buttonText='Login'
          scope='https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtubepartner'
          isSignedIn={true}
          onSuccess={(response) => props.loadUser(response)}
          onFailure={(response) => console.log(response)}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearInfo: () => dispatch({ type: "CLEAR_INFO_ASYNC" }),
    loadUser: (response) =>
      dispatch({ type: "LOAD_USER_ASYNC", response: response }),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.userSetter,
    paginator: state.paginator,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
