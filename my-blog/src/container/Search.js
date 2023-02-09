import { useEffect, useState } from "react";
import useSearch from "../Hooks/useSearch";

export default function Search(props) {
  // const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setSearchTerm] = useSearch(props.posts);
  const [fullList, setFullList] = useState(props.posts);

  // useEffect( () => {
  //     props.showFilteredList(filteredList);
  // }, [filteredList]);

  return (
    <div className={"Search" + " Search--" + props.theme}>
      <input
        type="text"
        placeholder="Search for posts"
        onInput={(e) => {
          if (e.target.value == "") {
            props.setIsSearching(false);
          } else {
            setSearchTerm(e.target.value);
            props.showFilteredList(filteredList);
            props.setIsSearching(true);
          }
        }}
      ></input>
    </div>
  );
}
