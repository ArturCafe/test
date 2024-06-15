import React, {useEffect, useState, } from 'react'
import axios from 'axios';
//import toast from "react-hot-toast";
import { Link } from 'react-router-dom'
import {useLocation}  from "react-router-dom";
import { useDispatch}from 'react-redux';
import {selectAdded} from '../../../features/posts/postSlice'
import './ColorChangingPhoto.css'; 

export default function PostItem({  post, user }) {

  const [flagadmin, setFlagadmin] = useState(false);
  const location = useLocation();
  
  const dispatch = useDispatch();

  useEffect(() => {
    setFlagadmin(false)
    if (`${user?.isAdmin}` === 'true' & `${location.pathname}` === "/selectposts" ) {
      setFlagadmin(true);
    } else {
      setFlagadmin(false);
    }
  
  },[user])

  
  const deletePost = async () => {
    try {
      const { data }  = await axios.delete(`/api/posts/${post._id}`);
      
      if (data?.success) {
       
        alert("post deleted")
      
    //navigate("/login")
      }
    } catch (error) {
      console.log(error);
    }
  };
 
const createPos=()=>{
  dispatch(selectAdded(post._id))
}
const selectPost = async () => {
 
  
  try {
    const  {data} = await axios.put(`/api/posts/post/select/${post._id}`);

    if (data) {
     
         console.log(data.select);
   
  //navigate("/login")
    }
  } catch (error) {
    console.log(error);
  }
};
 
//{flagadmin?  <button onClick={createPos}><h2>x</h2> </button>:<>{null}</>}
  return (
    <>
    <div className="w3-card-4 w3-margin w3-white photo-container "    >

 
 

{flagadmin?   
               <div>
                 <Link to ={`/updatepost/${post?._id}`}>
            
                              <div>
                               <img
                                    src={post?.image}
                                    alt="post images"
                                    style={{width:"100%"}}
                                  //  width="888px"
                                />
                            
                              </div>
                 </Link> 

                </div>
                  :
                 <div>
                <Link to ={`post/${post?._id}`}>
            
            <div>
             <img
                  src={post?.image}
                  alt="post images"
                  style={{width:"100%"}}
                //  width="888px"
              />
          
            </div>
            </Link> 

            </div>      
}
    <div className="w3-container">

      <h3><b> {post?.title}</b></h3>

      <h5>  <span className="w3-opacity">April 7, 2014</span></h5>
     
      <p>{post?.content}</p>

           <div className="w3-row">
              
                <p  >postid  {post._id}</p>

  
                <div className="w3-col m4 w3-hide-small">
             
                          <span className="w3-padding-large w3-right  w3-white w3-border w3-button  ">
                          <Link to ={`/post/${post?._id}`}> Vezi mai mult</Link>   
                         </span>
                       </div>
                     
                   </div>
           </div>

         </div>
       
        </>
  )
}


/*
import React, { useState } from 'react';
import './ColorChangingPhoto.css'; // Import CSS file for styling

function PostItem() {
  const [isClicked, setIsClicked] = useState(false);

  // Function to handle click event
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="photo-container" onClick={handleClick}>
 
    <div className={`photo-overlay ${isClicked ? 'clicked' : ''}`}>asdfgh</div>
     
      <img
        src="https://img.joomcdn.net/83c7e1150bf46b9fb5834b53ec7417445d6e251e_original.jpeg"
        alt="Color Changing Photo"
        className={`photo ${isClicked ? 'clicked' : ''}`}
      />
    </div>
  );
}

export default PostItem;
*/