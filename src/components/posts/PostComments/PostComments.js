import React from "react";
import { useSelector } from "react-redux";
import { selectCommentsByPostId } from "../../../redux/comments/commentsSlice";
import Detail from "../../_shared/Detail/Detail";
import PropTypes from "prop-types";

const PostComments = ({ postId }) => {
  const commentsForPosts = useSelector((state) =>
    selectCommentsByPostId(state, postId)
  );
  return (
    <div>
      <h3>Post comments</h3>
      {commentsForPosts.map(({ id, name, body, email }) => (
        <div key={id} className="post-comment">
          <Detail title="Subject" value={name} />
          <Detail title="Body" value={body} />
          <Detail title="Commenter" value={email} />
        </div>
      ))}
    </div>
  );
};

PostComments.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default PostComments;
