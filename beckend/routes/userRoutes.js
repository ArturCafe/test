const express = require('express')
const upload = require('../uploads/uploadavatar')
const router = express.Router()

const {
  registerUser,
  loginUser,
  getMe,
  getUser,
  updateProfile,
  updateProfile2,
  getUserc
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/user', getUser)
router.post('/user/:id', getUserc)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.put('/update', upload.single('image'),/*protect, */updateProfile )
router.put('/update2',/*protect, */updateProfile2 )
module.exports = router
  