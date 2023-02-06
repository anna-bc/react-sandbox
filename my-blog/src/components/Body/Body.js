import "./Body.css";

import { useState } from "react";
import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";

export default function Body() {
  // declare State variables
  const [postList, setPostList] = useState([
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
  ]);

//   const [idCount, setIdCount] = useState(3);

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
        // postId={idCount}
        // addId={() => setIdCount(idCount + 1)}
      />
    </div>
  );
}
