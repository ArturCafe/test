import React,{useState, useEffect} from 'react';
import { useLocation,  } from "react-router-dom";
import Modal from '../moreUseComponet/Modal/Modalhoc'
import PostForm from '../components/PostForm/PostForm';

import SecondBar from '../components/SecondBar';
import Blog from '../components/Blog/Blog';


export default function Dashboard() {
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
   
 
<SecondBar  />

 
</div>


   <div className="w3-col l4"> 

     <SecondBar  />
     
    
    </div>
    
    </>
  )
}





  
