import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import commentReducer from '../features/comment/commentSlice'
import postReducer from '../features/posts/postSlice'
import profileReducer from '../features/profile/profileSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    comments: commentReducer,
    posts: postReducer,
    profile: profileReducer
  },
})
