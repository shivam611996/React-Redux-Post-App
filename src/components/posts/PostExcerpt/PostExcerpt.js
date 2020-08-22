import React from "react";
import PostAuthor from "../PostAuthor/PostAuthor";
import PostDetails from "../PostDetails/PostDetails";
import PropTypes from "prop-types";

const PostExcerpt = ({ post }) => {
  const [open, setOpen] = React.useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  const { title, userId } = post;
  return (
    <>
      <article onClick={openDialog} className="post-excerpt" key={post.id}>
        <h3 className="post-title">{title}</h3>
        <PostAuthor userId={userId} isLink={true} />
        <p className="post-content">{post.body}</p>
      </article>
      <PostDetails open={open} post={post} closeDialog={closeDialog} />
    </>
  );
};

PostExcerpt.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostExcerpt;
