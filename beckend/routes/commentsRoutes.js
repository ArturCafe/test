const express = require('express')
const router = express.Router()
const {
  createComment,
  getComments,
  deleteComment,
} = require('../controllers/commentControler')   

const { protect } = require('../middleware/authMiddleware')
router.route('/create').post( createComment)
router.route('/:id').get( getComments)
router.route('/:id').delete(protect, deleteComment)
//router.route('/:id').get( getComments)
module.exports = router
