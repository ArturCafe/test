import axios from 'axios'

const API_URL = '/api/auth/'

// Register user
const register = async (formData) => {
  const response = await axios.post(API_URL, formData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

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

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
  updateProfile
}

export default authService
