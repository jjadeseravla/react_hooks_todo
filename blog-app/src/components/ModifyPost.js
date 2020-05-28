import React from 'react';

const ModifyPost = (props) => {
  return (
    <>
    <form>
      <h1>Modify post</h1>
        <input
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          type ="text"
          size="39"
          required
        ></input>
        <br/>
        <br/>
        <textarea
          defaultValue={props.content}
          placeholder="contents"
          onChange={props.savePostContentToState}
          rows="8"
          cols="41"
          required
        ></textarea>
        <br/>
        <br/>
        <button onClick={props.updatePost}>Update Post</button>
    </form>
    </>
  )
}
export default ModifyPost;
