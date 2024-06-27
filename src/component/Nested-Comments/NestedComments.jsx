import React, { useState } from "react";
import Comment from "./Comment";
import "./nestedcomments.css";
const NestedComments = () => {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      title: "This is first comment",
      children: [
        {
          id: 2,
          title: "This is child comment one",
          children: [
            {
              id: 5,
              title: "This is a subchild of commentId 2",
              children: [],
            },
          ],
        },
        {
          id: 3,
          title: "This is child comment two",
          children: [],
        },
        {
          id: 4,
          title: "This is child comment three",
          children: [],
        },
      ],
    },
  ]);

  const handleAddReply = (getCurrentParentId, getCurrentReply) => {
    console.log(getCurrentReply, getCurrentParentId);
    let updatedComments = [...comments];
    handleAddNewComment(updatedComments, getCurrentParentId, getCurrentReply);
    setComments(updatedComments);
  };

  //structure of comment/reply
  const NewComment = (text) => {
    return {
      id: new Date().getTime(),
      title: text,
      children: [],
    };
  };

  const handleAddNewComment = (
    updatedComments,
    getCurrentParentId,
    getCurrentReply
  ) => {
    //check on the higher level
    for (let i = 0; i < updatedComments.length; i++) {
      let comment = updatedComments[i];
      if (comment.id === getCurrentParentId) {
        comment.children.unshift(NewComment(getCurrentReply));
      }
    }

    // Now to recursevely check on the subChild level
    for (let i = 0; i < updatedComments.length; i++) {
      let comment = updatedComments[i];
      handleAddNewComment(
        comment.children,
        getCurrentParentId,
        getCurrentReply
      );
    }
  };

  return (
    <div className="nested-comments-container">
      <h1>Nested Comments</h1>
      <div className="comment-wrapper">
        <textarea
          onChange={(event) => setInputValue(event.target.value)}
          rows={"5"}
          cols={"100"}
          value={inputValue}
        />
        <br />
        <button
          onClick={() => {
            setComments([NewComment(inputValue), ...comments]);
            setInputValue("");
          }}
          className="add-comment-btn"
        >
          Add Comment
        </button>
      </div>
      <ul>
        {comments.map((comment) => (
          <Comment
            comment={comment}
            handleAddReply={handleAddReply}
            key={comment.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default NestedComments;
