import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../images/single.jpg';

const SinglePost = () => {
  const { id } = useParams();
  const [single, setSingle] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setSingle(data))
  }, [id]);
  const { title, body } = single;

  return (
    <div className='article'>
      <img src={Banner} alt={title} />
      <h3>{title}</h3>
      <hr />
      <p>{body}</p>
    </div>
  );
};

export default SinglePost;