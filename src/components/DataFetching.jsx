import React, { useEffect, useState } from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res)
        setPost(res.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts
          ? posts.map((post) => <li key={post.id}>{post.title}</li>)
          : null}
      </ul>
    </div>
  );
};

export default DataFetching;
