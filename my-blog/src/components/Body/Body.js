import "./Body.css";

import { useEffect, useState } from "react";
import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";
import Login from "../Login/Login";

export default function Body() {
  // declare State variables
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [postList, setPostList] = useState(() => {
    let posts = JSON.parse(localStorage.getItem('posts'));
    if(!posts) {
      return [
        {
          id: "1",
          title: "Test",
          content: "test",
          author: "anna",
        },
        {
          id: "2",
          title: "Testing again",
          content:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          author: "anna",
        },
      ];
    }
    return posts;
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(postList));
  }, [postList]);


  return (
    <div className="bodyWrapper">
      {!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <></> }
      <PostList list={postList} removePost={post => {
        let idx = postList.indexOf(post);
        let newPosts = postList.filter((el, i) => idx !== i)
        setPostList([...newPosts]);
      }} isLoggedIn={isLoggedIn} />
      {isLoggedIn ? <PostForm
        addPost={(post) => {
          setPostList([...postList, post]);
          console.log(postList);
        }}
      /> : <></>}
    </div>
  );
}
