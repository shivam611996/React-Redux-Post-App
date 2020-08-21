import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, fetchPosts } from "../../redux/posts/postsSlice";
import PostExcerpt from "./PostExcerpt/PostExcerpt";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./PostsList.css";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const [filteredPosts, setFilteredPosts] = React.useState();
  const users = useSelector((state) => state.users);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  React.useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    } else if (postStatus === "succeeded") {
      setFilteredPosts(posts);
    }
  }, [postStatus, dispatch, posts]);

  React.useEffect(() => {
    if (posts && !filteredPosts) {
      setFilteredPosts(posts);
    }
  }, [filteredPosts, posts]);

  let content;
  if (postStatus === "loading" || !filteredPosts) {
    content = <div className="loader">Loading...</div>;
  } else if (postStatus === "succeeded") {
    content = filteredPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "error") {
    content = <div>{error}</div>;
  }

  const onUserSearch = (e, value) => {
    let filteredPosts = posts;
    if (value && value.id) {
      filteredPosts = posts.filter(({ userId }) => userId === value.id);
    }
    setFilteredPosts(filteredPosts);
  };

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      <Autocomplete
        options={users}
        getOptionLabel={(user) => user.username}
        onChange={onUserSearch}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Posts by Username"
            margin="normal"
            variant="outlined"
          />
        )}
      />
      {content}
    </section>
  );
};

export default PostsList;
