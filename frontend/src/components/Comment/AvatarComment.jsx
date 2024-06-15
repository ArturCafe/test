import React from 'react'




const AvatarComment = ({ user }) => {
  return (
    <div className="avatar_comment">
    {/* <img src={user.avatar} alt="avatar" />*/}  
    <img 
    //src="https://www.w3schools.com/w3images/workshop.jpg"
    src={user?.avatar}
     alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
      <small className="d-block text-break">
       {/*  <Link to={`/profile/${user._id}`}>
          {user.name}
        </Link>*/}{user?.name}
      </small>
    </div>
  )
}

export default AvatarComment
