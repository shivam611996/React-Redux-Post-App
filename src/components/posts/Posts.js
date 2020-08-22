import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/posts/postsSlice";
import { fetchUsers } from "../../redux/users/usersSlice";
import { fetchComments } from "../../redux/comments/commentsSlice";
import PostsList from "./PostsList/PostsList";
import "./Posts.css";

const Posts = () => {
  const dispatch = useDispatch();
  const postStatus = useSelector((state) => state.posts.status);
  const usersStatus = useSelector((state) => state.users.status);
  const commentsStatus = useSelector((state) => state.comments.status);
  const postsError = useSelector((state) => state.posts.error);
  const usersError = useSelector((state) => state.users.error);
  const commentsError = useSelector((state) => state.comments.error);

  React.useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
    if (commentsStatus === "idle") {
      dispatch(fetchComments());
    }
  }, [postStatus, dispatch, usersStatus, commentsStatus]);

  let content;
  const isLoading =
    postStatus === "loading" ||
    usersStatus === "loading" ||
    commentsStatus === "loading";

  const isError =
    postStatus === "error" ||
    usersStatus === "error" ||
    commentsStatus === "error";

  const isSucceeded =
    postStatus === "succeeded" &&
    usersStatus === "succeeded" &&
    commentsStatus === "succeeded";

  if (isLoading) {
    content = <div className="loader">Loading...</div>;
  } else if (isSucceeded) {
    content = <PostsList />;
  } else if (isError) {
    const error =
      postsError ||
      usersError ||
      commentsError ||
      "Error occured, please try refreshing the page again.";
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default Posts;
