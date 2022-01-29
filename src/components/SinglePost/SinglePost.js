import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../images/single.jpg';
import Comments from '../Comments/Comments';

const SinglePost = () => {
  const { id } = useParams();

  // fetch single post
  const [single, setSingle] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setSingle(data))
  }, [id]);
  const { title, body } = single;

  // fetch comments
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    fetch(url)
      .then(res => res.json())
      .then(data => setComments(data))
  }, [id])
  // const { name, email, body } = comments;

  return (
    <div className='article'>
      <div className="post-data">
        <img src={Banner} alt={title} />
        <h3>{title}</h3>
        <hr />
        <p>{body}</p>
      </div>
      <div className="post-comments">
        <h4>
        {
          comments && comments.length > 1 ? `Comments (${comments.length})` : 'Comment'
        }
        </h4>
        {
          comments.map(comment=> <Comments comment={comment} key={comment.id} />)
        }
      </div>
    </div>
  );
};

export default SinglePost;