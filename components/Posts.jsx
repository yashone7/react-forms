import React, { useState, useEffect } from "react";

function Posts() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
    console.log("running");
  }, [posts]);

  const [posts, setPosts] = useState([]);

  console.log(posts);

  return (
    <div>
      {posts.map((el) => {
        return (
          <div key={el.id}>
            <p className="my-4">{el.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
