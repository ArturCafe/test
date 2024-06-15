import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Blog from "../../components/Blog/Blog";
import { Link } from 'react-router-dom';

export default function Admin() {
   // const [modalIsOpen, setIsOpen] = useState(false);
   // const { posts, /*isLoading*/} = useSelector((state) => state.posts);
  
    
    return(
        
        <>

<div  className="w3-col l4 " >

<div className="w3-card w3-margin">

<div className="w3-container w3-padding">
  <h4>Administrarea Profilului</h4>
</div>
<ul className="w3-ul w3-hoverable w3-white">

<li className="w3-padding-16 w3-hide-medium w3-hide-small">
    <img src="https://www.w3schools.com/w3images/woods.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <Link to="/createposts"  className="w3-large">
    <span className="w3-large">Post  create </span></Link><br/>
  </li>  

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/gondol.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <Link to="/selectposts"
  
    className="w3-large">Posts Redactare </Link><br/>
    <span>Posturi remove</span>
  </li> 
   
</ul>
</div>
<hr/> 



</div>


<div className="w3-col l4"> 

<div className="w3-card w3-margin">

<div className="w3-container w3-padding">
  <h4>Administrarea Profilului</h4>
</div>

<ul className="w3-ul w3-hoverable w3-white">

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <Link to = "/users" className="w3-large">Users</Link><br/>
    <span>Informatie utilizatori</span>
  </li>

  
  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/skies.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <Link to = "/profile" className="w3-large">Profil Redactare</Link><br/>
    <span>Ultricies congue</span>
  </li>   
  
</ul>
</div>
<hr/> 



 

</div>



<div className="w3-col l4"> 

<div className="w3-card w3-margin">

<div className="w3-container w3-padding">
  <h4>Administrarea NEXT FNC</h4>
</div>

<ul className="w3-ul w3-hoverable w3-white">

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <Link className="w3-large">other"</Link><br/>
    <span>Informatie utilizatori</span>
  </li>

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <Link to = "/others" className="w3-large">others</Link><br/>
    <span>Informatie utilizatori</span>
  </li>
</ul>
</div>

</div>

        </>
        
        
        
    )
        /*
        <Link 
        to="/adminposts" 
        className="w3-button w3-padding-large w3-white w3-border">Administrarea posturilor</Link>
        <Link 
        to="/profile" 
        className="w3-button w3-padding-large w3-white w3-border">Redactare profil</Link>
    
        <button onClick={openModal}>create post</button>
     
        
             <Modalhoc
             modalIsOpen={modalIsOpen}
             closeModal={closeModal}
           > 
            
         < PostForm  modalIsOpen={modalIsOpen}/>
             
           </Modalhoc>
           </>
    )*/
}