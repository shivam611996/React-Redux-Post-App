import React from "react";
import { useSelector } from "react-redux";
import PostExcerpt from "../PostExcerpt/PostExcerpt";
import {
  selectPostsByUserId,
  selectAllPosts,
} from "../../../redux/posts/postsSlice";
import { selectAllUsers } from "../../../redux/users/usersSlice";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const PostsList = () => {
  const [searchUser, setSearchUser] = React.useState(null);
  const allPosts = useSelector(selectAllPosts);
  const filteredPostsByUser = useSelector((state) =>
    selectPostsByUserId(state, searchUser)
  );
  const posts = searchUser ? filteredPostsByUser : allPosts;
  const users = useSelector(selectAllUsers);

  const onUserSearch = (e, value) => {
    let searchUserId = value && value.id ? value.id : null;
    setSearchUser(searchUserId);
  };
  return (
    <>
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
      {posts.map((post) => (
        <PostExcerpt key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostsList;
