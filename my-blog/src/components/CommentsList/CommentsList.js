import React from "react";
import Comment from "../Comment/Comment";

function CommentsList(props) {
  return (
    <div className={"CommentsList" + " CommentsList--" + props.theme}>
      <ul>
        {props.comments.map((comment, i) => (
          <li key={i}>
            <Comment author={comment.author} content={comment.content} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
