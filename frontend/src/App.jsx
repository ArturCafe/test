import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import Post from './pages/Post/Post.jsx'
import Createpost from './pages/Createpost/Createpost.jsx'
import Updatepost from './pages/Updatepost/Updatepost.jsx'
import RedPost from './pages/DelUdatePost/RedPost.jsx'
import Admin from './pages/Admin/Admin.jsx'
import SelectPosts from './pages/SelectPosts/SelectPosts.jsx'


export default function App() {
  return (
    <>
  <Router>
   
    <div className="w3-content" style={{maxwidth:"1400"}}>
        <Header/>
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/post/:id' element={<Post/>} />
            <Route path='/createposts' element={<Createpost/>} />
            <Route path='/selectposts' element={<SelectPosts/>} />
            <Route path='/updatepost/:id' element={<Updatepost/>} />
            <Route path='/admin' element={<Admin/>} />
          </Routes>
        </div>
      </Router>
     
    </>
  )
}
