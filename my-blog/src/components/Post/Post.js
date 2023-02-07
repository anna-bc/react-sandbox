import "./Post.css";

import { useState } from "react";
import PostForm from "../PostForm/PostForm";

export default function Post(props) {
  const [post, setPost] = useState({
    id: "",
    title: "",
    content: "",
  });

  function handleDeleteClick() {
    props.deleteClick(props.post);
  }

  return (
    <>
      <div className="postWrapper">
        <div className="post__item title">{props.post.title}</div>
        <div className="post__item content"> {props.post.content} </div>
        <div className="moderationWrapper">
          <div className="moderation__item author">{props.post.author}</div>
          {props.isLoggedIn ? <div className="moderation__item buttons">
            <button className="buttons__item" id="editBtn">Edit</button>
            <button className="buttons__item" id="deletBtn" onClick={handleDeleteClick}>
              Delete
            </button>
          </div> : <></>}
        </div>
      </div>
    </>
  );
}
