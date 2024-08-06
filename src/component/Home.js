import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  const listPosts = posts.map((post) => {
    return (
      <p key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </p>
    );
  });

  return (
    <>
      <h2>Posts</h2>
      {listPosts}
    </>
  );
}
