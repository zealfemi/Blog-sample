import React, { useState } from "react";
import { useEffect } from "react";

export default function Comments(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // COMMENTS
    const commentsUrl = `https://jsonplaceholder.typicode.com/posts/${props.id}/comments`;

    fetch(commentsUrl)
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  }, [props.id]);

  const commentList = comments.map((comment) => {
    return (
      <>
        <div key={comment.id}>
          Email: {comment.email}
          <p>{comment.body}</p>
        </div>
        <hr />
      </>
    );
  });

  return <div>{commentList}</div>;
}
