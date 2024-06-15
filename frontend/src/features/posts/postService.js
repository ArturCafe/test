import axios from 'axios'


const API_URL = '/api/posts/'



const createPost = async (params,  token ) => {
  console.log(params);
  const config = {
    headers: {
      // Multer only parses "multipart/form-data" requests
      'Content-Type': 'aplication/json multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data: params,

  }

  const response = await axios.post(API_URL, params, config) 
 
  return response.data
}


const getPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get("/api/posts/getposts", config)

  return response.data
}

// Delete user goal
const deletePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + postId, config)

  return response.data
}



const postService = {
  createPost,
  getPosts,
  deletePost,
}

export default postService
