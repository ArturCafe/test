const asyncHandler = require('express-async-handler')
//const upload = require('../uploads/upload')
//const {v4: uuidv4} = require ("uuid")
const Post = require('../models/postModel')
const User = require('../models/userModel')
//const public = require('../public')

const fs = require('fs-extra')
const path = require('path')
const mongoose = require('mongoose');
/*
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find()

  res.status(200).json(posts)
})

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("user");
    if (!posts) {
      return res.status(200).send({
        success: false,
        message: "No Blogs Found",
      });
    }
    return res.status(200).send({
      success: true,
     // BlogCount: posts.length,
      message: "All Blogs lists",
      posts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error WHile Getting Blogs",
      error,
    });
  }
};
*/
const getPosts = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    const posts = await Post.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.postId && { _id: req.query.postId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
          { content: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalPosts = await Post.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthPosts = await Post.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      posts,
      totalPosts,
      lastMonthPosts,
    });
  } catch (error) {
    next(error);
  }
};

 const createPost = async(req, res ) => {
    const url = req.protocol + '://' + req.get('host');

    if (!req.body.title || !req.body.content) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }
/*
    const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
*/
    const post = new Post({
        _id: new mongoose.Types.ObjectId(),
      //  slug: slug,
        content: req.body.content,
        title:  req.body.title,
        userId: req.body.userId,
        image: url + '/public/images/' + req.file.filename
    });
    post.save().then(result => {
        res.status(201).json({
            message: "Post created successfully!",
            userCreated: {
                _id: result._id,
                image: result.image
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
}

/*
const createPost = async (req, res, next) => {
    const url = req.protocol + '://' + req.get('host');
    const imagesDir = path.join(__dirname, 'public', 'images');

    // Verifică dacă câmpurile obligatorii sunt prezente în cerere
    if (!req.body.title || !req.body.content || !req.body.image) {
        return next(errorHandler(400, 'Please provide all required fields: title, content, and image'));
    }


    try {
        // Asigură-te că directorul /public/images există
        if (!fs.existsSync(imagesDir)) {
            fs.mkdirSync(imagesDir, { recursive: true });
        }

        // Mută fișierul în directorul /public/images
        const imagePath = path.join(imagesDir, req.body.imageName);
        fs.renameSync(req.body.image, imagePath); // presupunând că req.body.image este calea temporară a imaginii încărcate

        // Crează o nouă instanță a modelului Post
        const post = new Post({
            _id: new mongoose.Types.ObjectId(),
            content: req.body.content,
            title: req.body.title,
            userId: req.body.userId,
            image: url + '/public/images/' + req.body.imageName // Imaginile sunt în directorul /public/images
        });

        // Salvează postarea în baza de date
        const result = await post.save();
        
        // Răspunde cu un mesaj de succes și detalii despre postarea creată
        res.status(201).json({
            message: "Post created successfully!",
            postCreated: {
                _id: result._id,
                image: result.image
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: err.message || 'An error occurred while creating the post.'
        });
    }
};
*/
/*
const updatePost = async (req, res) => {
  try { 
    const url = req.protocol + '://' + req.get('host');
    const { id } = req.params;
    const { title, content } = req.body; // Extrage datele actualizate din corpul cererii
  
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).send({ error: 'Could not find your post' });
    }
  const postImage =url + '/public/images/' + req.file.filename;

    // Dacă există o imagine nouă și este diferită de cea veche, șterge imaginea veche
    if (postImage && postImage !== post.image) {
      const oldImageFileName = path.basename(post.image);
      const oldImagePath = path.resolve(__dirname, '../public/images', oldImageFileName);

      if (fs.existsSync(oldImagePath)) {
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.error('Error deleting the old image file:', err);
          } else {
            console.log('Old image file deleted successfully');
          }
        });
      } else {
        console.warn('Old image file not found:', oldImagePath);
      }
    }

    // Actualizează postul în baza de date
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title,
        content,
        image:  postImage
      }, // Actualizează câmpurile necesare
      { new: true } // Opțiune pentru a returna postul actualizat
    );

    res.status(200).send({ message: 'Post updated successfully', post: updatedPost });
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
};
*/
const updatePost = async (req, res) => {
  try {
    const url = req.protocol + '://' + req.get('host');
    const { id } = req.params;
    const { title, content } = req.body;
    const postImage = url + '/public/images/' + req.file.filename; // Formează URL-ul complet al imaginii

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).send({ error: 'Could not find your post' });
    }

    // Dacă există o imagine nouă și este diferită de cea veche, șterge imaginea veche
    if (postImage && postImage !== post.image) {
      const oldImageFileName = path.basename(post.image);
      const oldImagePath = path.resolve(__dirname, '../public/images', oldImageFileName);

      try {
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath); // Șterge sincron fișierul
          console.log('Old image file deleted successfully');
        } else {
          console.warn('Old image file not found:', oldImagePath);
        }
      } catch (err) {
        console.error('Error deleting the old image file:', err);
        return res.status(500).send({ error: 'Failed to delete old image file' });
      }
    }

    // Actualizează postul în baza de date
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, content, image: postImage },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).send({ error: 'Could not update the post' });
    }

    res.status(200).send({ message: 'Post updated successfully', post: updatedPost });
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
};


const getPost = asyncHandler(async (req, res) => {

  const post = await Post.findById( {_id: req.params.id})

  res.status(200).json(post)
})


/*
const deletePost = async (req, res) => {
  let id = req.body.postsId
  console.log(id);

  try {
await id.forEach(myFunction);

  function myFunction(id) {
   // txt += value + "<br>"; 
  
    Post.deleteMany(id);
  
   
   // await Post.findByIdAndDelete(req.body.post._id);
    res.status(200).send({
      success: true,
      message: "Product Deleted successfully",
    });
  }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error,
    });
  }
};
*/
/*
const deletePost = async (req, res) => {
  const  ids  = req.body; // Assuming ids are sent in the request body

  try {
    // Delete multiple items based on the provided IDs
    await Post.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ message: 'Items deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

 
*/


/*
 const deletePost = async (req, res) => {

  try {
     const post = await Post.findById({_id: req.params.id});

      if(!post){
          return res.send({Error: 'Could not find your post'})
      }

      const oldimage = {image: post.image} ;   

      if (oldimage) {
        
        const oldPath = path.join(__dirname, "../public","images", oldimage);
       
        if (fs.existsSync(oldPath)) {
          fs.unlink(oldPath, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            res.status(200);
          });
        }
      }
    

  
      await Post.findByIdAndDelete(req.params.id);
     
      res.status(200)
  } catch (error) {
      res.send({Error: error})
  }
 
  
  
}
*/
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).send({ error: 'Could not find your post' });
    }

    // Extrage numele fișierului din URL-ul complet
    const imageFileName = path.basename(post.image);
    const oldImagePath = path.resolve(__dirname, '../public/images', imageFileName);
    
    // Log pentru depanare
    console.log('Attempting to delete image at path:', oldImagePath);

    if (fs.existsSync(oldImagePath)) {
      fs.unlink(oldImagePath, async (err) => {
        if (err) {
          console.error('Error deleting the image file:', err);
          return res.status(500).send({ error: 'Failed to delete the image file' });
        }

        try {
          await Post.findByIdAndDelete(req.params.id);
          res.status(200).send({ message: 'Post and image deleted successfully' });
        } catch (dbErr) {
          console.error('Error deleting the post:', dbErr);
          res.status(500).send({ error: 'Failed to delete the post' });
        }
      });
    } else {
      console.warn('Image file not found:', oldImagePath);

      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: 'Post deleted successfully, but image not found' });
      } catch (dbErr) {
        console.error('Error deleting the post:', dbErr);
        res.status(500).send({ error: 'Failed to delete the post' });
      }
    }
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
};


const selectPost = async (req, res) => {

  const post = await Post.findById(req.params.id)

  if (post.select == 'true') {
    res.status(400)
    
  }
 const   updateS = {
      select: true
    }
try{
 const selectpost=
   await Post.findByIdAndUpdate(req.params.id,  updateS, {new: true})
  res.status(200).json( post.select)  
}catch(error) {
 res.status(500).json({ error: 'Internal server error' });
}
 
}
module.exports = {
  getPosts,
  selectPost,
  getPost,
  createPost,
  updatePost,
  deletePost,
}
