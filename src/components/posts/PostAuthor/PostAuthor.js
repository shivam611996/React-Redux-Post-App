import React from "react";
import { useSelector } from "react-redux";
import PostAuthorDetails from "../PostAuthorDetails/PostAuthorDetails";
import { selectUserById } from "../../../redux/users/usersSlice";
import Link from "@material-ui/core/Link";

const PostAuthor = ({ userId, isLink }) => {
  const author = useSelector((state) => selectUserById(state, userId));

  const [open, setOpen] = React.useState(false);
  const openDialog = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const closeDialog = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const authorName = `by ${author ? author.username : "Unknown author"}`;
  return (
    <>
      {isLink ? (
        <Link
          component="button"
          variant="body2"
          underline="always"
          onClick={openDialog}
        >
          {authorName}
        </Link>
      ) : (
        <label>{authorName}</label>
      )}
      <PostAuthorDetails
        open={open}
        closeDialog={closeDialog}
        author={author}
      />
    </>
  );
};

export default PostAuthor;
