import { createContext, useReducer } from "react";

export const PostList = createContext({
  postsList: [],
  addPost: () => { },
  deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === 'DELETE_POST') {
    newPostList = currPostList.filter(post => post.id !== action.payload);
  }
  else if (action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
}

const PostListProvider = ({ children }) => {
  const [postsList, dispatchPostList] = useReducer(postListReducer, DEFAILT_POST_LIST);

  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reaction: reactions,
        userId: userId,
        tags: tags
      }
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: 'DELETE_POST', payload: postId })
  };

  return (
    <PostList.Provider value={
      {
        postsList, addPost, deletePost
      }
    }>
      {children}</PostList.Provider>
  );
};

const DEFAILT_POST_LIST = [
  {
    id: '1',
    title: 'Going To Pune',
    body: 'Hey Friends I Am Going To Pune For A Trip. I Am So Excited.',
    reaction: '5',
    userId: 'user-1',
    tags: ['veacation', 'pune', 'trip ']
  },
  {
    id: '2',
    title: 'Going To Mumbai',
    body: 'Hey Friends I Am Going To Mumbai For A Trip. I Am So Excited.',
    reaction: '4',
    userId: 'user-2',
    tags: ['veacation', 'mumbai', 'trip ']
  }
];

export default PostListProvider;