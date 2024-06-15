const express = require('express')
const router = express.Router()
const upload = require('../uploads/upload')

const {
  getPosts,
  getPost,
  createPost,
  selectPost,
  updatePost,
  deletePost,
} = require('../controllers/postsController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', upload.single('image'), createPost )

router.route('/getposts').get( getPosts)
router.route('/post/:id').get( getPost)
router.route('/post/select/:id').put(selectPost)
router.put('/update/:id', upload.single('image'), updatePost);

router.route('/delete/:id').delete( deletePost)//.put(protect, updatePost)
//router.route('/update/:id', upload.single('image')).put( updatePost)
module.exports = router
