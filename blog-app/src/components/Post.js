import React from 'react';

const Post = (props) => {
  return (
    <>
    <section>
      <h3>{props.title}</h3>
      <p>{props.content} </p>
        <button onClick={() => props.editPost(id)}>Edit</button>
        <button onClick={() => props.deletePost(id)}>Delete</button>
    </section>
    </>
  )
}
export default Post;
