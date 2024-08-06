import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Comments from "./Comments";

export default function Post() {
  const { id } = useParams();
  const postId = id;
  const [post, setPost] = React.useState([]);

  useEffect(() => {
    // POST DETAILS
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    fetch(url)
      .then((response) => response.json())
      .then((post) => setPost(post));
  }, [postId]);

  console.log(post);

  return (
    <>
      <Link to="/">Back home</Link>
      <h2>Title: {post.title}</h2>
      <p>Body: {post.body}</p>
      <br />

      <h3>Comments</h3>
      <Comments id={postId} />
    </>
  );
}
