import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { createPost } from '../../../features/posts/postSlice'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function PostForm() {

const dispatch = useDispatch()
const { user, /*isLoading*/} = useSelector((state) => state.auth)

const [fileUpload, setFileUpload] = useState(false)
const [title, setTitle] = useState('test')
const [content, setContent] = useState('test')


const navigate = useNavigate()



const submitHandler = (e) => {
  try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('content', content)
      formData.append('userId', user._id)
      formData.append('image', fileUpload)
     

      dispatch(createPost(formData))
      setContent('')
      setTitle('')
      setFileUpload('')
      navigate('/admin')

  } catch (error) {
      console.log(error)
  }
}



return (
    <>
  
         
    <section className='form'>
      <form  onSubmit={(e) => e.preventDefault()} >
        <div className='form-group'>
          <label htmlFor='text'>Post</label>
          <input
            type='file'
            id ='image'
            name='image'
            onChange={(e) => setFileUpload(e.target.files[0])}
          />
           <label htmlFor='title'>Title</label>
           <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
           <label htmlFor='content'>Content</label>
           <textarea
            type='content'
            name='content'
            id='content'
            value ={content}
            onChange={(e) =>  setContent(e.target.value) }
             />
       
       
          <button className='btn-block' type='submit'
          onClick={submitHandler}
          >
            Add Post
          </button>
     
         </div>
      </form>
    </section>
    
    </>
  )
}

export default PostForm
