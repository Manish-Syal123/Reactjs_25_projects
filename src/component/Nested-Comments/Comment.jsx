import React, { useState } from "react";

const Comment = ({ comment, key, handleAddReply }) => {
  const [reply, setReply] = useState("");
  const [showReplyCommentBox, setShowReplyCommentBox] = useState(false);

  return (
    <li key={key}>
      <span>{comment.title}</span>
      {!showReplyCommentBox ? (
        <button onClick={() => setShowReplyCommentBox(true)}>Add Reply</button>
      ) : null}
      {showReplyCommentBox ? (
        <div>
          <textarea
            rows={"2"}
            cols={"20"}
            value={reply}
            onChange={(event) => setReply(event.target.value)}
          />
          <br />
          <div className="reply-buttons-container">
            <button
              onClick={() => {
                handleAddReply(comment.id, reply); // parentId, comentText/reply
                setShowReplyCommentBox(false);
                setReply("");
              }}
            >
              Submit
            </button>
            <button
              onClick={() => {
                setShowReplyCommentBox(false);
                setReply("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      {/* Recursively call the same component */}
      {comment && comment.children && comment.children.length > 0 ? (
        <ul>
          {comment.children.map((childComent) => (
            <Comment
              handleAddReply={handleAddReply}
              comment={childComent}
              key={childComent.id}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default Comment;
