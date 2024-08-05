import React from "react";
import { useState, useEffect } from "react";

export default function Home(props) {
  const [data, setData] = useState([]);

  const url = `https://jsonplaceholder.typicode.com/posts/${props.id}`;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return;
}
