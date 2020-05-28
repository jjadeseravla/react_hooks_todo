import React, { useState, useRef } from 'react';
import CreateNewPost from './CreateNewPost';
import Posts from './Posts';

const DisplayAllPosts = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  //initialise useRef
  //const getTitle = useRef();
  //const getContent = useRef(); //Clearing the state value will not affect our input field value on the DOM.
  //To locate our input fields on the DOM and clear their value, so use: useRef.

  const savePostTitleToState = (event) => {
    console.log(1, title);
    setTitle(event.target.value);
    console.log(11, title);
  }

  const savePostContentToState = (event) => {
    console.log(2, content);
    setContent(event.target.value);
    console.log(22, content);
  }

  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  }

  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost);
  }

  const editPost = (id) => {
    setEditPostId(id);
    toggleModifyPostComponent();
  }

  const deletePost = (id) => {
    const modifiedPost = allPosts.filter(eachPost => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  }

  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map(eachPost => {
      if (eachPost.id === editPostId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content
        };
      }
      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  }

  const savePost = (event) => {
    console.log(3, allPosts);
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, {title, content, id}]);
    console.log(4, allPosts);
    setTitle("");
    setContent(""); //after data has been captured successfully, want to clear our state +
    //all the input field value so user can add another post, so we clear our title and content state variables
    //getTitle.current.value = "";
    //getContent.current.value = "";
    toggleCreateNewPost();
  };

  if(isCreateNewPost) {
      return (
    <>
      <CreateNewPost
      savePostTitleToState={savePostTitleToState}
      savePostContentToState={savePostContentToState}
      //getTitle={getTitle}
      //getContent={getContent}
      savePost={savePost}
      />
    </>
  )
} else if (isModifyPost) {
  const post = allPosts.find(post => {
    return post.id === editPostId;
  });
  return (
    <ModifyPost
      title={post.title}
      content={post.content}
      updatePost={updatePost}
      savePostTitleToState={savePostTitleToState}
      savePostContentToState={savePostContentToState}
    />
  );
}
  return (
    <>
      <h2>All Posts</h2>
      {!allPosts.length ? (
        <div>
          <h3>No posts :(</h3>
        </div>
      ) : (
        allPosts.map(eachPost => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              content={eachPost.content}
              editPost={editPost}
              deletePost={deletePost}
              />
          );
        })
      )}

      <br/>
      <br/>
      <button onClick={toggleCreateNewPost}>Create new</button>
    </>
  )
}
export default DisplayAllPosts;
