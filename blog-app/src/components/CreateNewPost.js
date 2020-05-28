import React from 'react';

const CreateNewPost = (props) => {
  return (
    <>
    <form>
      <h1>Create new post</h1>
        <input
          type ="text"
          onChange={props.savePostTitleToState}
          size="39"
          required
          //ref={props.getTitle}//used useRef to locate our input field on the DOM, we now need to clear
          //input field value once we have saved our post
        ></input>
        <br/>
        <br/>
        <textarea
          rows="8"
          cols="41"
          onChange={props.savePostContentToState}
          required
          //ref={props.getContent}
        ></textarea>
        <br/>
        <br/>
        <button type="button" onClick={props.savePost}>Save Post</button>
    </form>
    </>
  )
}
export default CreateNewPost;
