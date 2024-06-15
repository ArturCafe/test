import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import {  useSelector, useDispatch} from 'react-redux'
//import toast from "react-hot-toast";
import Postm from "../Post/Postm";
import { Link } from 'react-router-dom'
import { useLocation,  } from "react-router-dom";
import Modalhoc from "../../moreUseComponet/Modal/Modalhoc";



export default function Updatepost() {
  const params = useParams();
  const navigate = useNavigate();
  const { user, isLoading,} = useSelector((state) => state.auth);
  const [path, setPath] = useState();
  const [post, setPost] = useState({});
  const [postUpdate, setPostUpdate] = useState({
    title: 'test',
    content: 'test',
    image: ''
    }
  );
  const [flagadmin, setFlagadmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
 // const { posts, /*isLoading*/} = useSelector((state) => state.posts);

 const { id } = useParams(); 
   const location = useLocation();
   const dispatch = useDispatch()
   const [fileUpload, setFileUpload] = useState(false)

   const handleChange = (e) => {
    const { name, value } = e.target;
    setPostUpdate({ ...postUpdate, [name]: value });
  };

  const handleFileChange = (e) => {
    setFileUpload(e.target.files[0]);
  };

  const updatePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', postUpdate.title);
    formData.append('content', postUpdate.content);
    if (fileUpload) {
      formData.append('image', fileUpload);
    }

    try {
      const { data } = await axios.put(`/api/posts/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (data.message) {
        alert('Post updated successfully');
        navigate('/admin');
      }
    } catch (error) {
      console.error('Error updating the post:', error);
    }
  };

/*
const submitHandler = (e) => {
  try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('content', content)
      formData.append('userId', user._id)
      formData.append('image', fileUpload)
     
      updatePost()
    //  dispatch(createPost(formData))
      setContent('')
      setTitle('')
      setFileUpload('')
      navigate('/admin')

  } catch (error) {
      console.log(error)
  }
}
*/
/*
const updatePost = async () => {
  try {
    const { data } = await axios.put(`/api/posts/update/${post._id}`, formData);
    
    if (data?.success) {
     
      alert("post deleted")
    
  navigate("/admin")
    }
  } catch (error) {
    console.log(error);
  }
};
*/
  function closeModal() {
    setIsOpen(false)
  }
  
  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    setPath('')
    if (`${user?.isAdmin }`) {
      setPath('updatepost');
      setFlagadmin(true);
    } else {
        setPath('post')
        setFlagadmin(false);
    }

  },[user])


  const deletePost = async () => {
    try {
      const { data } = await axios.delete(`/api/posts/delete/${post._id}`);

      if (data.message) {
        alert("Post deleted");
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };
/*
  const handleComment = async (e) => {
    e.preventDefault();
    
    try {
      const { data } = await axios.post("/api/comments", {
    
      content: content,
      author: user.name,
      idpost: post._id,
     // replyCM: [],
      createdAt: new Date().toISOString()
     
      });
      if (data?.success) {
        alert("Blog Created");
       // toast.success("Blog Created");
       // navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
*/
 
  useEffect(() => {
   
     getPost(params)
     
  }, [ user]);

  const getPost = async () => {
    try {
      const { data } = await axios.get(
        `/api/posts/post/${params.id}`
      );
      setPost(data);
   
    } catch (error) {
      console.log(error);
    }
  };

  
  console.log(isOpen);


 return (
  <>
      <div>
        {isLoading ? <div> loadig</div> :
        
            <div className="w3-row">

              <div className="w3-col l8 s12">
              <span>REDACTEAZA</span>
              <Postm path={path} post={post}/>
              </div>

              <div className="w3-col l4">
              <div className="w3-card w3-margin">
             
<div>{ flagadmin ?
<ul className="w3-ul w3-hoverable w3-white">

<div onClick={openModal} >
  <li className="w3-padding-16">
    <img src="https://www.w3schools.com/w3images/gondol.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <span 
    className="w3-large">Posts Redactare A </span><br/>
    <span>Praes tinci sed</span>
  </li> 
</div>
  
  <li onClick={deletePost} className="w3-padding-16 w3-hide-medium w3-hide-small">
    <img src="https://www.w3schools.com/w3images/woods.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
    <span className="w3-large" >Posts delete</span><br/>
    <span>Lorem ipsum dipsum</span>
  </li>  
  
</ul>
:<div><ul className="w3-ul w3-hoverable w3-white">

<li className="w3-padding-16">
  <img src="https://www.w3schools.com/w3images/gondol.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
  <span 
  className="w3-large">Posts Redactare </span><br/>
  <span>Praes tinci sed</span>
</li> 


<li className="w3-padding-16 w3-hide-medium w3-hide-small">
  <img src="https://www.w3schools.com/w3images/woods.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
  <span className="w3-large">Posts delete</span><br/>
  <span>Lorem ipsum dipsum</span>
</li>  

<li className="w3-padding-16 w3-hide-medium w3-hide-small">
  <img src="https://www.w3schools.com/w3images/woods.jpg" alt="Image" className="w3-left w3-margin-right" style={{width:"50px"}}/>
  <span className="w3-large">Posts delete</span><br/>
  <span>Lorem ipsum dipsum</span>
</li> 
</ul></div>}
</div>
<hr/>       


              </div>
              </div>
            </div> 

 }
 <div>
  <Modalhoc modalIsOpen={isOpen}
  closeModal={closeModal}>
 <section className='form'>
      <form  onSubmit={updatePost}  >
        <div className='form-group'>
          <label htmlFor='text'>Post</label>
          <input
            type='file'
            id ='image'
            name='image'
            onChange={handleFileChange}
          />
           <label htmlFor='title'>Title</label>
           <input
            type='text'
            name='title'
            id='title'
            value={postUpdate.title}
            onChange={handleChange}
          />
           <label htmlFor='content'>Content</label>
           <textarea
            type='content'
            name='content'
            id='content'
            value ={postUpdate.content}
            onChange={handleChange}
             />
       
       
          <button className='btn-block' type='submit'
          
          >
            Update Post
          </button>
     
         </div>
      </form>
    </section>

  </Modalhoc>
 </div>
      <Footer />

      </div>
  
    </>
 )
}
