import React from "react"

function Comment(props) {
  return (
    <div className={"Comment" + " Comment--" + props.theme}>
      <div className="Comment__item">{props.author}</div>
      <div className="Comment__item">{props.content}</div>
    </div>
  )
};

export default Comment;
