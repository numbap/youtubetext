import React from "react";

const UserDetails = (props) => {
  console.log("Inside User Details");
  console.log(props.user);
  return (
    <div>
      <p>Access Token: {props.user.access_token}</p>
      <p>Google ID: {props.user.googleId}</p>
      <p>Image URL: {props.user.imageUrl}</p>
      <p>Email: {props.user.email}</p>
      <p>Name: {props.user.name}</p>
      <div>
        Channel Data:{" "}
        {props.user.channels.map((x) => (
          <div key={x.snippet.title}>{x.snippet.title}</div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
