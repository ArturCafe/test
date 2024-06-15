import React, { useState, useEffect } from "react";
//import PostItem from '../../components/Post/PostItem/PostItem'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {  useSelector} from 'react-redux'
//import toast from "react-hot-toast";
import { Link } from 'react-router-dom'
import Modalhoc from '../../moreUseComponet/Modal/Modalhoc';
import { useLocation,  } from "react-router-dom";
import CommentSection from "../../components/Comment/CommentSection"
//import { useCallback } from 'react';

export default function Post() {
  const params = useParams();
  const navigate = useNavigate();
  const { user, isLoading,} = useSelector((state) => state.auth);

  const [post, setPost] = useState({});
  const [flag, setFlag] = useState(false);
  const location = useLocation();
  
  const [comments, setComments] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [flagadmin, setFlagadmin] = useState(false);
  const [content, setContent] = useState('');

/*
const getComment = async () => {
  try {
    const { data } = await axios.get(`/api/comments/${post._id}`);
    
    if (data?.success) {
      setComments(data?.comments);
     // setInputs({
      //  author: data?.comments.author,
      //  content: data?.comment.content,
       // image: data?.blog.image,
    //  });
    }
  } catch (error) {
    console.log(error);
  }
};

*/
const deletePost = async () => {
  try {
    const { data } = await axios.delete(`/api/posts/${post._id}`);
    
    if (data?.success) {
     
      alert("post deleted")
    
  //navigate("/login")
    }
  } catch (error) {
    console.log(error);
  }
};

console.log(flag);

useEffect(() => {
  setFlagadmin(false)
  if (`${user?.role}` === "1" & `${location.pathname}` === "/deletepost" ) {
    setFlagadmin(true);
  } else {
    setFlagadmin(false);
  }

},[user])

  function openModal() {
    setModalIsOpen (true);
  
    console.log(comments);
   // if (user) {
   //   setModalIsOpen (true);
   // } else {
   //   setModalIsOpen (false);
   // }
    //dispatch(getComments(postid))
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  /*
  const handleComment = async (e) => {
    e.preventDefault();
    
    try {
      const { data } = await axios.post("/api/comments", {
    
      content: content,
      author: user.name,
      idpost: post._id,
     // replyCM: [],
      createdAt: new Date().toISOString()
     
      });
      if (data?.success) {
        alert("Blog Created");
       // toast.success("Blog Created");
       // navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };*/

  //initalp details
  useEffect(() => {
   
     getPost(params)
     
  }, [ user]);

  useEffect(() => {
    setFlag(false)
    if (`${user?.role}` === "0"  ) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  


  },[user])

  



  const getPost = async () => {
    try {
      const { data } = await axios.get(
        `/api/posts/post/${params.id}`
      );
      setPost(data);
   
    } catch (error) {
      console.log(error);
    }
  };

 //{flagadmin?  <button onClick={deletePost}><h2>x</h2> </button>:<>{null}</>}

  return (
    <div>
<div  className="w3-card-4 w3-margin w3-white">
 
     <Link to ={`/post/${post?._id}`}>

                  <div>
                   <img
                        src={post?.image}
                        alt="post images"
                        style={{width:"100%"}}
                      //  width="888px"
                    />
                
                  </div>
     </Link>

    <div className="w3-container">

      <h3><b> {post?.title}</b></h3>

      <h5>  <span className="w3-opacity">April 7, 2014</span></h5>
     
      <p>{post?.text}</p>

           <div className="w3-row">
                <p  >comentarii  {comments.length}</p>
                <p  >postid  {post._id}</p>

  
                <div className="w3-col m4 w3-hide-small">
             
                          <span className="w3-padding-large w3-right  w3-white w3-border w3-button  ">
                          <b onClick={openModal}> Commenteaza </b>   
                         </span>
                       </div>
                     
                   </div>
           </div>

           <Modalhoc modalIsOpen={modalIsOpen} closeModal={closeModal}>
         { /*<Comments 
          post={post} user={user} 
  />*/}
 <CommentSection postId={post._id} />
           </Modalhoc>
     </div>
       

    </div>
  )
}
