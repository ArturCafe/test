import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import image from '../../../assets/fotopost/image.jpg'



export default function ProfileCard({user}) {

const name ="user"
const text="text"
  const [imagee, setImagee] = useState(image)

  return (
    <div >{!user ? <Link to='/'>
      
      <div className="w3-card w3-margin w3-margin-top">

    {user?.avatar ? 
                       <img
                           
                            src={user.avatar}
                          
                            alt={user.avatar.name}
                            style={{width:"100%"}}
                        />
                    
                        
                     : <img
                        //src={ fileUpload}
                            src={`http://localhost:3000${imagee}`}
                              alt={imagee}
    
                              style={{width:"100%"}}
                        />
       } 
          
        <div className="w3-container w3-white">
      {user?.name ? <div>{user.name}</div> : <div >{ name ? <div>{name}</div> : <div ><h4><b>My Name </b></h4> </div>}</div>}
      {user?.text ?  <div>{user.text}</div> : <div> { text ?  <p>{text}</p> : <p >text</p>}</div>}
        </div>
     
      </div><hr/>
      
       </Link>
        :
    <Link to='/profile'> 
<div className="w3-card w3-margin w3-margin-top">

{user?.avatar ? 
                   <img
                       
                        src={user.avatar}
                      
                        alt={user.avatar.name}
                        style={{width:"100%"}}
                    />
                
                    
                 : <img
                    //src={ fileUpload}
                        src={`http://localhost:3000${imagee}`}
                          alt={imagee}

                          style={{width:"100%"}}
                    />
   } 
      
  
 
    <div className="w3-container w3-white">
  {user?.name ? <div>{user.name}</div> : <div >{ name ? <div>{name}</div> : <div ><h4><b>My Name </b></h4> </div>}</div>}
  {user?.text ?  <div>{user.text}</div> : <div> { text ?  <p>{text}</p> : <p >text</p>}</div>}
    </div>
 
  </div><hr/>
  </Link>  }
    </div>
  )
}

//   <img src={`http://localhost:3000${image}}`}/>