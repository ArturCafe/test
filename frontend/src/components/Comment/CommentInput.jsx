import React,{useState, useEffect} from 'react'


export default function CommentInput({ handleSubmit, setComment/* comment, onLike, onEdit, onDelete */}){
  
    
  
return (
<>
 <div className="w3-light-grey w3-padding-large w3-padding-32 w3-margin-top" >
   <form onSubmit={handleSubmit}>
      <input
       className="w3-input  w3-border" 
       type="text" 
       placeholder="Message" 
       required name="Message"
       onChange={(e)=>setComment(e.target.value)}
       />
    

     
      <div className='w3-row  w3-section'>
        <button 
        className="w3-button w3-black "
        type="submit">
          SEND MESSAGE
        </button>
      </div>
    </form>
</div>

</>
)
}
