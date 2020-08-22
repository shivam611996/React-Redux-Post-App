import React from "react";
import PostAuthor from "../PostAuthor/PostAuthor";
import PostComments from "../PostComments/PostComments";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

const PostDetails = ({ open, post, closeDialog }) => {
  const { title, userId } = post;
  return (
    <Dialog fullScreen open={open} onClose={closeDialog}>
      <section className="post-details">
        <h2>Post Details</h2>
        <div className="post-overview">
          <h3 className="post-title">{title}</h3>
          <PostAuthor userId={userId} />
        </div>
        <PostComments postId={post.id} />
        <Button variant="contained" onClick={closeDialog}>
          Back
        </Button>
      </section>
    </Dialog>
  );
};

PostDetails.propTypes = {
  open: PropTypes.bool.isRequired,
  post: PropTypes.object.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default PostDetails;
