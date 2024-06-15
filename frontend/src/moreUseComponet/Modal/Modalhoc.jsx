import React from 'react'
import Modal from 'react-modal';
import "./Modal.css";


export default function Modalhoc({children, closeModal, modalIsOpen}) {
    return (
      <>
      <Modal
      appElement={document.getElementById('root') || undefined}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
      className="modal-content"

    >
      <div>
         <button onClick={closeModal}>x</button></div>
    
      {children}
      
    </Modal>
         </>
      
  
      
    )
  }
  
