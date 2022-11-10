import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

function CommentBox(props) {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.saveComment(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea onChange={handleChange} value={comment} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
}

export default connect(null, actions)(CommentBox);
