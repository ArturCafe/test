import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function SecondBar({psld}) {
  /*
  const handleSelectItem = (itemId) => {
    const index = selectedItems.indexOf(itemId);
    if (index === -1) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      const updatedItems = [...selectedItems];
      updatedItems.splice(index, 1);
      setSelectedItems(updatedItems);
    }
  };
  */

  const handleDelete = async () => {
    try {
      // Make a DELETE request to the backend to delete multiple items
      await axios.delete('/api/posts/delete', { data:  psld });
      console.log(psld);
      // Optionally, you can update your component state or fetch data again from the server
    } catch (error) {
      console.error('Error deleting items:', error);
    }
  };

/*
  const handleDeletePost = async () => {
    try {
        const res = await fetch(`/api/posts/delete`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            
            postsId: psld,
           })
        });
        const data = await res.json();
        if (res.ok) {
           // setUsers((prev) => prev.filter((user) => user._id !== userIdToDelete));
           // setShowModal(false);
           console.log("tot bine");
        } else {
            console.log(data.message);
        }
    } catch (error) {
        console.log(error.message);
    }
  };
*/
  return (
    <>
<div className="w3-card w3-margin">

<div className="w3-container w3-padding">
  <h4>Administrarea Saitului</h4>
</div>

<ul className="w3-ul w3-hoverable w3-white">

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <Link to = "/users" className="w3-large">Users</Link><br/>
    <span>Informatie utilizatori</span>
  </li>

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/gondol.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <button 
    onClick={handleDelete}
    className="w3-large">Post Redactare </button><br/>
    <span>Praes tinci sed</span>
  </li> 

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/skies.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <Link to = "/profile" className="w3-large">Profil Redactare</Link><br/>
    <span>Ultricies congue</span>
  </li>   
  <li className="w3-padding-16 w3-hide-medium w3-hide-small">
    <img src="https://www.w3schools.com/w3images/woods.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <span className="w3-large">Mingsum</span><br/>
    <span>Lorem ipsum dipsum</span>
  </li>  
</ul>
</div>
<hr/> 
</>
  )
}

/* return (
<header className='headerSecond'>
      <div className='logo'>
        <Link to="/postcreate">Postare</Link>
      </div>
      <div className='logo'>
        <Link to='/profil'>Profil</Link>
      </div>

      <div className='logo'>
        <Link to='/sait'>sait</Link>
      </div>
            
    </header>
  ) */

    
  
