import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import postService from './postService'



const initialState = {
  posts: [],
  post: null,
  psld: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createPost = createAsyncThunk(
  'post/create',
  async (params, thunkAPI) => {

    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.createPost(params, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


export const getPosts = createAsyncThunk(
  'posts/getAll',
  async (_, thunkAPI) => {
    try {
    //  const token = thunkAPI.getState().auth.user.token
      return await postService.getPosts({/*token*/})
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
/*
// Delete user goal
export const deletePost = createAsyncThunk(
  'posts/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.deletePost(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
*/





export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset: (state) => initialState,
    selectAdded(state, action) {
     // state.psld = [ ...state.psld, action.payload];
 // Check if the payload already exists in the array
 const isDuplicate = state.psld.some(item => item === action.payload);

 // If it's not a duplicate, add it to the array
 if (!isDuplicate) {
   return {
     ...state,
     psld: [...state.psld, action.payload]
   };
 }

 // If it's a duplicate, return the current state without modification
 return state;

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
       // state.posts.push(action.payload)
        state.posts = action.payload
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })


      .addCase(getPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = action.payload
        
        
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
       // state.message = action.payload
        state.message = action.payload
       
      })
    
      
  },
})

export const { reset , selectAdded} = postSlice.actions
export default postSlice.reducer
