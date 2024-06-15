import React from 'react';
import PostItem from '../Post/PostItem/PostItem';

export default function Blog({user, posts}) {


  return (
  <div  >

    {posts?.length > 0 ? (
          <div >
            {posts.map((post) => (
              <PostItem  user={user}
              key={post._id}
              post={post} 
              />
            ))}
          </div>
        ) : (
          <h3>You have not set any posts</h3>
        )}
    </div>
    
   
  )
}
