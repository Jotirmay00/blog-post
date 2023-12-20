import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(PostListContext)

  const userIdElement =useRef()
  const titleElement = useRef()
  const bodyElement = useRef()
  const reactionsElement = useRef()
  const tagsElement = useRef()


  const handleSubmit =(e)=>{
    e.preventDefault()
    const userId =userIdElement.current.value
    const postTitle = titleElement.current.value
    const postBody = bodyElement.current.value 
    const reactions = reactionsElement.current.value 
    const tags = tagsElement.current.value.split(" ") 
    
    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId,postBody,postTitle,reactions,tags)



  }
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
        Enter your User Id here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          placeholder="Please Enter your userId"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
        Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={titleElement}
          placeholder="Give a suitable title"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
        Post Content
        </label>
        <input
          type="text"
          className="form-control"
          id="body"
          ref={bodyElement}
          placeholder="Enter all your Thoughts"
        />
      </div>


      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
        Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactionsElement}
          placeholder="reactions"
        />
      </div>

      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
        Enter your Hastags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Hastags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
