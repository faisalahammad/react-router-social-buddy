import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);
  return (
    <div>
      <h2>Blog Page</h2>
      {
        posts.map(post=> <Post post={post} key={post.id} />)
      }
    </div>
  );
};

export default Blog;