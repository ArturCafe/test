import React,{useState, useEffect} from 'react'
import AvatarComment from './AvatarComment'
import  {useSelector} from 'react-redux'
import image from '../../assets/fotopost/image.jpg'

export default function Comment({ comment, /*onLike, onEdit, onDelete */}){
  const [imagee, setImagee] = useState(image)
 
  /*
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const { currentUser } = useSelector((state) => state.user);


  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comment]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedContent(comment.content);
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`/api/comment/editComment/${comment._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: editedContent,
        }),
      });
      if (res.ok) {
        setIsEditing(false);
        onEdit(comment, editedContent);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
 
  */
  
return (
<> <div className="w3-container w3-padding-large w3-padding- 2 w3-margin-top" >
   <div className="w3-image  w3-col s6 tablink ">
    <img 
    src={`http://localhost:3000${imagee}`}
    alt={imagee}
    style={{width: 50}}
    className="w3-image "/>
    <p ><strong>Nume</strong></p>
   </div>

<div className='w3-col s6 tablink w3-light-blue '>

     <p className="w3-input w3-padding-auto" >   message: {comment.content}</p>
    
</div>
</div>
</>
)
}
