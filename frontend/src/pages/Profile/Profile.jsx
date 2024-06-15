import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import image from '../../assets/fotopost/image.jpg'
import { Link } from 'react-router-dom'
import Modalhoc from '../../moreUseComponet/Modal/Modalhoc'
import { updateProfile } from '../../features/auth/authSlice'


export default function Profile() {

  const name ="user"
  

    const navigate = useNavigate()
    const { user, isLoading,} = useSelector((state) => state.auth)
    const [inputs, setInputs] = useState({ })
    const [fileUpload, setFileUpload] = useState(false)
    const [userId, setUserId] = useState("");
    const [showbtn, setShowbtn] = useState(false);

  const dispatch = useDispatch()
 console.log(user);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

useEffect(()=>{
  if ( user.role == 1) {
   // navigate ("/profile")
   setShowbtn(true)
  }


setUserId(user._id)
setInputs({
  text: user.text,
  email: user.email,
  name:  user.name,

}

)
},[])

  const submitHandler = (e) => {
   
    try {
        const profileData = new FormData()
        profileData.append('id', userId)
        profileData.append('text', inputs.text)
        profileData.append('email', inputs.email)
         profileData.append('name', inputs.name)
        profileData.append('image', fileUpload)
       
        dispatch(updateProfile(profileData))
       
        setFileUpload('')
        
  
    } catch (error) {
        console.log(error)
    }
  }
  
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  
  return (<>
  
  <div className="w3-card w3-margin w3-margin-top">
   { showbtn ? <button onClick={openModal}>update</button> : ""}
        {user?.avatar ? 
                   <img
                       
                        src={user.avatar}
                      
                        alt={user.avatar.name}
                        style={{width:"100%"}}
                    />
                
                    
                 : <img
                    //src={ fileUpload}
                        src={`http://localhost:3000${image}`}
                          alt={image}

                          style={{width:"100%"}}
                    />
        } 
      <Modalhoc modalIsOpen={modalIsOpen} closeModal={closeModal} >
         <section className='form'>
           <form  onSubmit={(e) => e.preventDefault()} >
         
              <div className='form-group'>
        
               <label htmlFor='avatar'>avatar</label>
                  <input
                    type='file'
                    id ='avatar'
                    name='avatar'
                    onChange={(e) => setFileUpload(e.target.files[0])}
                   />
               <label htmlFor='text'>Text</label>
                  <input
                     type='text'
                     name='text'
                     id='text'
                     value={inputs.text}
                     onChange={handleChange}
                    />
               
               <label htmlFor='name'>Name</label>
                  <input
                     type='text'
                     name='name'
                     id="name"
                     value={inputs.name}
                     onChange={handleChange}
                    />
               <label htmlFor='email'>Email</label>
                  <input
                     type='text'
                     name='email'
                     id='email'
                     value={inputs.email}
                     onChange={handleChange}
                    />

               </div>
       <div className='form-group'>
          <button className='btn btn-block' type="onSubmit"
          onClick={() => submitHandler(userId)} >
            sckimbare profile
          </button>

        </div>

      </form>
     
    </section>
    </Modalhoc>

   

    <div className="w3-container w3-white">
  {user?.name ? <div>{user.name}</div> : <div >{ name ? <div>{name}</div> : <div ><h4><b>My Name </b></h4> </div>}</div>}
  {user?.text ? 
  <div>{user.text}</div> :
  <div ><p>other text</p></div>}

   {user?.imail ? <div>{user.email}</div> : <p>other email</p>}
    </div>
 
  </div><hr/>
  </>
  )}