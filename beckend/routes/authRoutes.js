const express = require('express')
const router = express.Router()

const {
  registerUser,
  loginUser,
  
} = require('../controllers/authControler')
const {  protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)

module.exports = router
  