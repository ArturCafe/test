import React from 'react'
import { Link } from 'react-router-dom';

export default function PopularPosts({posts}) {
  

  
  return (
    <>
<div className="w3-card w3-margin">

    <div className="w3-container w3-padding">
      <h4>Popular Posts</h4>
    </div>

    <ul className="w3-ul w3-hoverable w3-white">
    {posts?.length > 0 ? (
          <div className="w3-card-4 w3-margin w3-white">
            {posts.slice(0,3).map((post) => (

<li className="w3-padding-16"    key={post?._id} >
<Link to ={`/post/${post?._id}`}>
<img   src={post?.image} alt='sdfg' className="w3-left w3-margin-right" style={{width:"50px"}}/>
<span className="w3-large">{post?.title}</span><br/>
</Link>
</li>
         
            ))}
          </div>
        ) : (
          <h3>You have not set any posts</h3>
        )}
 
     
    </ul>
  </div>
  <hr/> 
 


    </>
  )
}
