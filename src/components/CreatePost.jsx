import React, { useRef } from 'react';
import { useContext } from 'react';
import PostListProvider, { PostList } from '../store/post-list-store';
const CreatePost = () => {

  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = postTitleElement.current.value;
    const body = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(',').map(tag => tag.trim());

    userIdElement.current.value = '';
    postTitleElement.current.value = '';
    postBodyElement.current.value = '';
    reactionsElement.current.value = '';
    tagsElement.current.value = '';

    addPost(userId, title, body, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User ID</label>
        <input type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter your User ID" />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How Are You Feeling Today..." />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea
          ref={postBodyElement}
          className="form-control"
          id="body" rows="3"></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of reactions</label>
        <input type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="Enter the number of reactions" />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter tags separated by commas" />
      </div>

      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
}
export default CreatePost;