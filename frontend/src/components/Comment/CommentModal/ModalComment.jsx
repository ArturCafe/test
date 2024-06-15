import React, {useState, useEffect} from 'react'
import Modal from 'react-modal';
import Comments from '../Comments';




export default function FormComment({closeModal, modalIsOpen, user, comments, post}) {

    
  
  return (
    <div> 
      <Modal 
    appElement={document.getElementById('root') || undefined}
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
    overlayClassName="modal-overlay"
    ariaHideApp={false}
    className="modal-content"
  > 
   <button onClick={closeModal}>x</button>

    
    
    <Comments comments={comments} post={post} user ={user}/>
    
    </Modal>
       

    </div>
  )
}