import React ,{useEffect, useState}from 'react'
import { Link } from 'react-router-dom';

export default function Headers({user}) {

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if(user?.isAdmin === true ){
    setFlag(true)
    }
    else{
      setFlag(false)
    }
  }, [ user])

  return (

<header className="w3-container w3-center w3-padding-32"> 
  <h1><b>MY BLOG</b></h1>



  <div>Welcome to the blog of <span className="w3-tag">{flag ? <p> 
     <Link 
      to="/admin" 
      className="w3-tag ">Admin</Link>
     </p>:<p>author</p>}</span></div>

</header>
    
  )
}
