import React from "react";

function Post(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </li>
  );
}

export default Post;
