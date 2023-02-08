import "./Body.scss";

import { useEffect, useState } from "react";
import PostList from "../PostList/PostList";
import PostForm from "../PostForm/PostForm";
import Login from "../Login/Login";

export default function Body(props) {
  // declare State variables
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [postList, setPostList] = useState(() => {
    let posts = JSON.parse(localStorage.getItem("posts"));
    if (!posts) {
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
    localStorage.setItem("posts", JSON.stringify(postList));
  }, [postList]);

  const [postIdxToEdit, setPostIdxToEdit] = useState("");

  return (
    <div
      className={
        "Body" + " Body" + (props.theme === "light" ? "--light" : "--dark")
      }
    >
      <div className="sideBarWrapper">
        {isLoggedIn ? (
          <PostForm
            addPost={(post) => {
              setPostList([...postList, post]);
              console.log(postList);
            }}
            theme={props.theme}
            setTheme={props.setTheme}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="posts">
        <PostList
          list={postList}
          setPostList={setPostList}
          removePost={(post) => {
            let idx = postList.indexOf(post);
            let newPosts = postList.filter((el, i) => idx !== i);
            setPostList([...newPosts]);
          }}
          isLoggedIn={isLoggedIn}
          theme={props.theme}
          setTheme={props.setTheme}
        />
      </div>
      <div
        className="sideBarWrapper"
      >
        {!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} theme={props.theme}
        setTheme={props.setTheme} /> : <></>}
      </div>
    </div>
  );
}
