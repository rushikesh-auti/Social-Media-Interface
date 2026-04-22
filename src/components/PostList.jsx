import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postsList } = useContext(PostListData);

  return (
    <>
      {postsList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;