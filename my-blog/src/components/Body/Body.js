import "./Body.css";

import { useEffect, useState } from "react";
import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";

export default function Body() {
  // declare State variables
  const [postList, setPostList] = useState(() => {
    let posts = JSON.parse(localStorage.getItem('posts'));
    if(!posts) {
      return [];
    }
    return posts;
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(postList));
  }, [postList]);


  return (
    <div className="bodyWrapper">
      <PostList list={postList} removePost={post => {
        let idx = postList.indexOf(post);
        let newPosts = postList.filter((el, i) => idx !== i)
        setPostList([...newPosts]);
      }} />
      <PostForm
        addPost={(post) => {
          setPostList([...postList, post]);
          console.log(postList);
        }}
      />
    </div>
  );
}
