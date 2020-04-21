import React from "react";
import { connect } from "react-redux";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Paginator from "./paginator.component";

const VideoListing = (props) => {
  return (
    <div>
      <h3>Video Listing</h3>
      <Paginator
        paginator={props.paginator}
        accessToken={props.user.access_token}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCaption: () => dispatch({ type: "SET_CAPTION_ASYNC" }),
    clearCaption: () => dispatch({ type: "CLEAR_CAPTION_ASYNC" }),
    listVideos: () => dispatch({ type: "SET_VIDEOS_ASYNC" }),
    setUser: (user) => dispatch({ type: "SET_USER", user: user }),
    setPaginator: (videos) =>
      dispatch({ type: "SET_PAGINATOR", videos: videos }),
  };
};

const mapStateToProps = (state) => {
  return {
    vidList: state.contentSetter.vidList,
    user: state.userSetter,
    paginator: state.paginator,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoListing);
