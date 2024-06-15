import React,{useState, useEffect} from 'react';
import Modalhoc from '../../moreUseComponet/Modal/Modalhoc'
import PostForm from '../../components/Post/PostForm/PostForm';
import SecondBar from '../../components/SecondBar';
import Blog from '../../components/Blog/Blog';
import { useSelector } from 'react-redux';



export default function Adminposts() {


  const { user, /*isLoading*/} = useSelector((state) => state.auth);
  const { posts, /*isLoading*/} = useSelector((state) => state.posts);
  const [modalIsOpen, setIsOpen] = useState(false);
    const { psld, /*isLoading*/} = useSelector((state) => state.posts);
    
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

console.log(posts);


  
  return (
    <>
 <div className="w3-row">

<div className="w3-col l3 " >
<Modalhoc   modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            > 
    
           < Blog modalIsOpen={modalIsOpen}/>

    
    </Modalhoc>
<div className="w3-container w3-padding">
  <h4>Redactarea Postului</h4>
</div>

<ul className="w3-ul w3-hoverable w3-white">

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <p className="w3-large">schimba foto</p>
    <span>Informatie utilizatori</span>
  </li>

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/gondol.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
  <p className="w3-large">dfgh</p>
    <span>Praes tinci sed</span>
  </li> 

  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/skies.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <p className="w3-large">dfgh</p>
    <span>Ultricies congue</span>
  </li>   
  
</ul>
</div>
<hr/> 

<div className="w3-col l9"  > 
<Blog posts={posts.posts}></Blog>
</div>
</div>

    </>
  )
}
