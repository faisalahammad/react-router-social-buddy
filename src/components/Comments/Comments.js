import React from 'react';

const Comments = (props) => {
  const { id, name, email, body } = props.comment;
  return (
    <>
      <blockquote>
        <h5><a href={`mailto:${email}`}>{name}</a></h5>
        <p>{body} -- ({id})</p>
      </blockquote>
    </>
  );
};

export default Comments;