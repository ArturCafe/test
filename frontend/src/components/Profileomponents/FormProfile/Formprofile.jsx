import React from 'react'

export default function ({ setFileUpload, onSubmit,
   text ,setText,   name , setName }) {

    

  return (
    <section className='form'>
    <form  onSubmit={(e) => e.preventDefault()} >
      <div className='form-group'>
        
       <div><label htmlFor='fileUpload'>Profile</label><input
          type='file'
          id ='fileUpload'
          name='fileUpload'
          
          onChange={(e) => setFileUpload(e.target.files[0])}
        /></div>
        
       <div> <label htmlFor='title'>Name</label>
         <input
          type='text'
          name='title'
          id='name'
          onChange={(e) => setName(e.target.value)}
           value={name}
        /></div>

       <div> <label htmlFor='text'>Text</label>
         <textarea
          type='text'
          name='text'
          id='text'
          value ={text}
          onChange={(e) =>  setText(e.target.value) }
           /></div> 
      </div>
      <div className='form-group'>
        <button className='btn btn-block' type='submit'
        onClick={onSubmit}
        >
          Add Post
        </button>
      </div>
    </form>
  </section>
  )
}
