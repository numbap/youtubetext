import React from "react";
import { connect } from "react-redux";

const Paginator = (props) => {
  console.log("Inside Paginator");
  console.log(props.paginator);
  return (
    <div className='list-group'>
      {props.paginator.map((x) => {
        return (
          <li
            key={x.id}
            className='list-group-item'
            onClick={() =>
              props.loadCaption(
                x.contentDetails.upload.videoId,
                props.accessToken
              )
            }
          >
            {x.snippet.title}
          </li>
        );
      })}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCaption: (id, accessToken) =>
      dispatch({
        type: "FIND_CAPTION_ASYNC",
        videoId: id,
        token: accessToken,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Paginator);
