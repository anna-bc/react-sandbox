import "./Post.css";

import { useState } from "react";

export default function Post(props) {
  const [post, setPost] = useState({
    id: "",
    title: "",
    content: "",
  });

  return (
    <div className="postWrapper">
      <div className="post__item title">{props.post.title}</div>
      <div className="post__item content"> {props.post.content} </div>
      <div className="moderationWrapper">
        <div className="moderation__item date">{props.post.date}</div>
        <div className="moderation__item buttons">
          <button className="buttons__item">Edit</button>
          <button className="buttons__item">Delete</button>
        </div>
      </div>
    </div>
  );
}