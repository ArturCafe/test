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

export default function Postm({path, post}) {
  
 //{flagadmin?  <button onClick={deletePost}><h2>x</h2> </button>:<>{null}</>}

  return (
    <div>
<div  className="w3-card-4 w3-margin w3-white">
 
     <Link to ={`/${path}/${post?._id}`}>

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

         
           </div>

      
     </div>
       

    </div>
  )
  
 
}
