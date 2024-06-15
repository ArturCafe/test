const asyncHandler = require('express-async-handler')
const Comment = require('../models/commentModel');
const userModel = require('../models/userModel');
const postModel = require('../models/postModel');
const mongoose = require("mongoose");      

// @desc    Get goals
// @route   GET /api/goals
// @access  Private

/*
const getComments = asyncHandler(async (req, res) => {

const idPost  = req.params.id;

const comments = await Comment.find( {idPost: idPost} )
res.status(200).json(comments)
//if (!idPost){
//  res.status(300).json("nui id post" )
//}else{
//const comments = await Comment.find( {idPost: idPost} )
//res.status(200).json(comments)
//}
  

  
})
*/
/*
const getComments = async (req, res) => {
  try {
    const  id  = req.params.id;
    
    const comments = await Comment.find( {idPost: id});
    if (!comments) {
      return res.status(404).send({
        success: false,
        message: "blog not found with this is",
      });
    }
    return res.status(200).send({
      success: true,
      message: "fetch single blog",
      comments,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error while getting single blog",
      error,
      
    });
  }
};
   */
  /*
const getComments = async (req, res, next) => {
  //const {postId} = req.params.id
 // console.log(req.params);
  try {
    const comments = await Comment.find({ postId: req.params.id}).sort({
      createdAt: -1,
    });
    res.status(200).json(  comments );
  } catch (error) {
    next(error);
  }
};      
*/
const getComments = async (req, res, next) => {
 // if (!req.user.isAdmin)
   // return next(errorHandler(403, 'You are not allowed to get all comments'));
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 3;
  
    const comments = await Comment.find({ postId: req.params.id})
      
      .skip(startIndex)
      .limit(limit);
   
  
   
    
    res.status(200).json( comments );
  } catch (error) {
    next(error);
  }
};

const createComment = async (req, res, next) => {
  try {
    const { content, postId, userId } = req.body;

    if (!userId /*!== req.user.id*/) {
      return next(
        errorHandler(403, 'You are not allowed to create this comment')
      );
    }

    const newComment = new Comment({
      content,
      postId,
      userId,
    });
    await newComment.save();

    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};



/*
  const createComment = asyncHandler(async (req ,res) => {
  
  try {
    const { 
      content,
     idpost,
     author
    } = req.body

    const newComment = new commentModel({ 
      author,
      content,
      idPost: idpost,

    })


    await newComment.save()

    return res.json(newComment )
    
  } catch (err) {
    return res.status(500).json({msg: err.message})
  }
});
*/

/*
const createComment = async (req, res) => {
  try {
    const {  content, postId, userId  } = req.body;
    //validation
   // if (!title || !description || !image || !user) {
    //  return res.status(400).send({
      //  success: false,
      //  message: "Please Provide ALl Fields",
    //  });
  //  }
   // const exisitingUser = await userModel.findById(author);
    //validaton
   // if (!exisitingUser) {
   //   return res.status(404).send({
   //     success: false,
   //     message: "unable to find user",
    //  });
   // }
    //const postComment = await postModel.findById(idpost);

    const newComment = new Comment(
      {  userId: userId, content: content, postId:postId });

   // const session = await mongoose.startSession();
    //session.startTransaction();
    //await newComment.save({ session });

   // postComment.push(newComment);

   // await postComment.save({ session });

   // await session.commitTransaction();

    await newComment.save();

    return res.status(201).send({
      success: true,
      message: "com Created!",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error WHile Creating blog",
      error,
    });
  }
};
*/
//

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
  const user = req.body.user
  const commentI =req.body.comment._id
  const commentC = await Comment.findById(commentI)

  if (!commentC) {
    res.status(400)
    throw new Error('Goal not found')
  }
console.log("req.user.id", req.user.id);
  // Check for user
  //if (!req.user) {
    if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (commentC.post_user_id.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await commentC.remove()

  res.status(200).json("removed",{ id: req.commentC._id })
})
        
module.exports = {
 
  getComments,
  createComment,
  deleteComment,
}
