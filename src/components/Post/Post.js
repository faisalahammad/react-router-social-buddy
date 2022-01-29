import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
  const { id, title, body} = props.post;
  return (
    <div className='card'>
      <p className='serial'>{id}</p>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={`/posts/${id}`}><button>Read more...</button></Link>
    </div>
  );
};

export default Post;