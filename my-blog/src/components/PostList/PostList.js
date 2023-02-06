import './PostList.css';
import Post from "../Post/Post";

export default function PostList(props) {
    return (
        <div className="postList">
            <ul>
                { props.list.map((post, i) => <li key={i}><Post post={post} /></li>
                )}
            </ul>
        </div>
    )
}