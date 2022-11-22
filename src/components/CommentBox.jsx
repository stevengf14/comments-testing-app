import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { useNavigate } from "react-router-dom";

function CommentBox(props) {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    shouldNavigateAway();
  });

  const shouldNavigateAway = () => {
    if (!props.auth) {
      navigate("/");
    }
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.saveComment(comment);
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={handleChange} value={comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={props.fetchComments}>
        Fetch Comments
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps, actions)(CommentBox);
