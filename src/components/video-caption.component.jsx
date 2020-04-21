import React from "react";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import UserDetails from "./user-details.component";

const VideoCaption = (props) => {
  return (
    <div>
      <h3>Video Search</h3>
      {props.content.caption.map((x) => (
        <p
          // To Do
          // onMouhseUp={() => console.log(window.getSelection())}
          key={x.timeLine.split(",")[0]}
          id={x.timeLine.split(",")[0]}
        >
          {x.captionLine}
        </p>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: () => dispatch({ type: "ADD_NUMBER" }),
    substractNumber: () => dispatch({ type: "SUBSTRACT_NUMBER" }),
  };
};

const mapStateToProps = (state) => {
  return {
    numberCounter: state.numberCounter.count,
    content: state.contentSetter,
    user: state.userSetter,
  };
};

export default connect(mapStateToProps, null)(VideoCaption);

//       {props.user && <UserDetails props={props.user} />}
