import React from "react";

import Post from "./Post";

function Content(props) {
  return (
    <section>
      <ul>
        {props.posts.map(function(item) {
          return <Post title={item.title} content={item.content} />;
        })}
      </ul>
    </section>
  );
}

export default Content;
