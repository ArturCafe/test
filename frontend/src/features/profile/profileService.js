import axios from 'axios'

const API_URL = '/api/users/update'

// Create new goal
const createProfil = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL, formData, config)

  return response.data
}

// Get user goals
const getProfil = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}


const updateProfile = async ( params, token ) => {

  const config = {
    headers: {
      // Multer only parses "multipart/form-data" requests
      'Content-Type': 'aplication/json multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data: params,
  }
  
  const response = await axios.put('/api/users/update', params, config) 
 
  return response.data
}

const profileService = {
  createProfil,
  getProfil,
  deleteGoal,   
  updateProfile,
 
}

export default profileService
