import './PostForm.css';

import { useState } from 'react';

export default function PostForm(props) {
    const [post, setPost] = useState({
        id: "",
        title: "",
        content: "",
      });

    function onSubmit(e) {
        e.preventDefault();
        props.addPost(post);
    }

  return (
    <form className="formWrapper" onSubmit={onSubmit}>
      <input type="text" className="form__item title" placeholder="Write a Title" />
      <textarea className="form__item content" placeholder="Write some content in here" />
      <div className="moderationWrapper">
        <div className="moderation__item date">2023-02-06</div>
        <div className="moderation__item buttons">
          <input type="submit" className="buttons__item" />
        </div>
      </div>
    </form>
  );
}
