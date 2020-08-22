import React from "react";
import Detail from "../../_shared/Detail/Detail";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

const PostAuthorDetails = ({ open, author, closeDialog }) => {
  const {
    username,
    name,
    email,
    website,
    company: { name: companyName, catchPhrase, bs },
  } = author;
  return (
    <Dialog
      fullScreen
      open={open}
      onClick={(e) => {
        // prevent event propogation and opening of PostDetails dialog
        // when clicked anywhere on the dialog except Back button
        e.stopPropagation();
      }}
      onClose={closeDialog}
    >
      <section className="post-author-details">
        <h2>User Details</h2>
        <Detail title="Username" value={username} />
        <Detail title="Full Name" value={name} />
        <Detail title="Email" value={email} />
        <Detail title="Website" value={website} />

        <div>
          <h3>Company Details</h3>
          <Detail title="Name" value={companyName} />
          <Detail title="Catch Phrase" value={catchPhrase} />
          <Detail title="BS" value={bs} />
        </div>
        <Button variant="contained" onClick={closeDialog}>
          Back
        </Button>
      </section>
    </Dialog>
  );
};

PostAuthorDetails.propTypes = {
  open: PropTypes.bool.isRequired,
  author: PropTypes.object.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default PostAuthorDetails;
