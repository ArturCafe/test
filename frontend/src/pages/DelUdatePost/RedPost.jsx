import React,{useState, useEffect} from 'react';
import { useLocation,  } from "react-router-dom";
import Modalhoc from "../../moreUseComponet/Modal/Modalhoc"
import PostForm from "../../components/Post/PostForm/PostForm";
import SecondBar from '../../components/SecondBar';
import Post from '../Post/Post';


export default function RedPost() {
  const location = useLocation();

  const [modalIsOpen, setIsOpen] = useState();
  
  const [flag, setFlag] = useState(false)


  

  useEffect(() => {
    setFlag(false)
    if (`${location.pathname}` === "/dashboard") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  },[location.pathname])



  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
 
  return (
    <>
    <div  className="w3-col l8 s12" >
   
  <header className="w3-row"> 
  <button className="w3-tag" onClick={openModal}>REDACTARE</button>
  
  <p>Post</p>
</header>


</div>
<Modalhoc
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            > 
    
           < PostForm  modalIsOpen={modalIsOpen}/>
    
        </Modalhoc>

   <div className="w3-col l4"> 

     <SecondBar  />
     
    
    </div>
    
    </>
  )
}