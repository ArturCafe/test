import React from "react";
import PostForm from "../../components/Post/PostForm/PostForm";
//import {  useSelector } from 'react-redux'


export default function Createpost() {
    
    
   // const { user, isLoading,} = useSelector((state) => state.auth);
    //const { posts,} = useSelector((state) => state.posts);
    


    return(
        
        <>
        
       <div  className=" w3-margin-15 w3-white">
         
           < PostForm  />
    
       </div>
 
        </>
    )
}

/*
 <Link to="/delepost" className="w3-button w3-padding-large w3-white w3-border">Deletepost</Link>
    
        <button onClick={openModal}>create post</button>

        <div> 
         <Modalhoc
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            > 
    
           < PostForm  modalIsOpen={modalIsOpen}/>
    
        </Modalhoc>
       

    </div>
*/