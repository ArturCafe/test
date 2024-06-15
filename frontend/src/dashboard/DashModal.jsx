import React,{useState} from 'react'
import Modal from '../moreUseComponet/Moadal/Modal'
import PostForm from '../components/PostForm/PostForm';
import SecondHeader from './SecondBar';


export default function DashModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

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
  <h1><buton className="w3-tag" onClick={openModal}>postare</buton></h1>
  <p>Welcome to the Post of</p>
</header>
   
   <Modal closeModal={closeModal} modalIsOpen={modalIsOpen}><PostForm/></Modal>
</div>
   <div className="w3-col l4"> 

     <SecondHeader />
     
    
    </div>
    
    </>
  )
}

////import "./ProfileModal.css";



  