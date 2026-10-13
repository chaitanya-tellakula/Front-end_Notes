import { act, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList;

  if (action.type === "DELETE-POST") {
    newPostList = currentPostList.filter(
      (post) => post.id != action.payload.postId,
    );
  } else if (action.type === "ADD-POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD-INITIAL-POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  function addPost(userId, postTitle, postBody, reactions, tags) {
    dispatchPostList({
      type: "ADD-POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  }

  function addInitialPosts(posts) {
    dispatchPostList({
      type: "ADD-INITIAL-POSTS",
      payload: {
        posts: posts,
      },
    });
  }
  function deletePost(id) {
    dispatchPostList({
      type: "DELETE-POST",
      payload: {
        postId: id,
      },
    });
  }

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPosts: addInitialPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
