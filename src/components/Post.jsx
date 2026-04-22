import { RiChatDeleteFill } from "react-icons/ri";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {

  const { deletePost } = useContext(PostList);


  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
            <RiChatDeleteFill />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (<span key={tag} className="badge bg-secondary m-1 hashtag">{tag}</span>
        ))}
        <div className="alert alert-secondary reaction" role="alert">
          This Post Has {post.reaction} Reactions.
        </div>
      </div>
    </div>
  );
}

export default Post;  