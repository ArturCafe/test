const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const { errorHandler } = require('../middleware/errorMiddleware')


// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body


  if (
    !username || 
    !email || 
    !password ||
     username === '' ||
     email === ''||
     password === ''
  ) {
    next(errorHandler(400, 'All field are required'))
  }

  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
      role: user.role
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
}


// @access  Public
const loginUser = async (req, res, next) => {

  const { email, password } = req.body;

if (!email || !password || email ==='' || password === '') {
    next(errorHandler(400, 'All field are requiered'))
}

  try {

  const user = await User.findOne({ email });

   if (!user) {
    return next(errorHandler(400, 'user  not found'));
   }

  const validPassword  = bcrypt.compare(password, user.password);

  if (!validPassword) {
    return next(errorHandler(400, 'incorect password'));
  }

  const token = jwt.sign(
    {id: user._id, isAdmin: user.isAdmin},  process.env.JWT_SECRET
  );


  res.json({
    _id: user.id,
    username: user.username,
    text: user.text,
    isAdmin: user.isAdmin,
    email: user.email,
    avatar: user.avatar,
    //token: generateToken(user._id),
    token
  })  

  }catch(error){
   next(error)
  }

};


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}



module.exports = {
  registerUser,
  loginUser,
 
}
