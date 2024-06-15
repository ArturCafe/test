const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
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
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      role: user.role
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      text: user.text,
      role: user.role,
      email: user.email,
      avatar: user.avatar,
      token: generateToken(user._id),
    })  
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
  res.json({ email})
})
  
   
const updateProfile = async (req, res , next) => {

  const url = req.protocol + '://' + req.get('host');
  const  {id, text, name, email }= req.body;
   const user= await User.findById(id) ;

  const avatar_prev = user.avatar
  const file = req.file?.filename
  const  avatar_prez  =  url + '/avatar/' +  file
  const update = { 
   
     avatar: file ?  avatar_prez : avatar_prev,
     text : text,
     name: name,
     email: email
                  };
   
  try {   
    if (! id) {
         res.status(400)
      throw new Error("User not found");
   
    };

const updatedUser = await User.findByIdAndUpdate(id, update, { new: true,})

    res.json({updatedUser});

  } catch (error) {
    next(error);
  }
};
const updateProfile2 = async (req, res , next) => {

  const  {text , id } = req.body;




  const update = { 
     
    text: text
      
                  };
   
  try {   
    if (! id) {
      res.status(400)
      throw new Error("User not found");
    };

const updatedUser = await User.findByIdAndUpdate(id, update, { new: true,})

    res.json({ updatedUser });

  } catch (error) {
    next(error);
  }
};

const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

const getUserc = asyncHandler(async (req, res) => {
  const { idUser } = req.params.id

  // Check for user email
  const user = await User.findById({_id: idUser })
  
 
    res.json({
      _id: user.id,
      name: user.name,
      text: user.text,
      role: user.role,
      email: user.email,
      avatar: user.avatar,
      token: generateToken(user._id),
    })  

  
})
const getUser = asyncHandler(async (req, res) => {
  const { idUser } = req.body

  // Check for user email
  const user = await User.findById({_id: idUser })

 
    res.json({
      _id: user.id,
      name: user.name,
      text: user.text,
      role: user.role,
      email: user.email,
      avatar: user.avatar,
      token: generateToken(user._id),
    })  

  
})

module.exports = {
  registerUser,
  loginUser,
  updateProfile,
  updateProfile2,
  getMe,
  getUser,
  getUserc
}
