import axios from 'axios'

const API_URL = '/api/comments/'

// Create new goal
const createComment = async (commentData, token) => {


  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, commentData, config)

  return response.data
}




const getCommentpost = async ( params ) => {


  const response = await axios.post( `/api/comments/${params}`)


  return response.data
}

// Delete user goal
const deleteComment = async (commentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + commentId, config)

  return response.data
}

const commentService = {
  createComment,
  getCommentpost,
  deleteComment,
}

export default commentService
