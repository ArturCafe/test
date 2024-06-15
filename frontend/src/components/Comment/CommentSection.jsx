import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import CommentInput from './CommentInput';

export default function CommentSection({postId}) {
  const { user, isLoading,} = useSelector((state) => state.auth)
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState(null);
  const [comments, setComments] = useState([]);
 // const [showModal, setShowModal] = useState(false);
 // const [commentToDelete, setCommentToDelete] = useState(null);
  
 // const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) {
      return;
    }
    try {
      const res = await fetch('/api/comments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: comment,
          postId: postId,
          userId: user._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment('');
        setCommentError(null);
        setComments([data, ...comments]);
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };


  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comments/${postId}`);
    
        if (res.ok/*=== null || undefined*/) {
          const data = await res.json();
          setComments(data);
        }
       // const data = "nus comentarii";
       // setComments(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getComments();
  }, [postId]);
  
/*
  const handleLike = async (commentId) => {
    try {
      if (!user) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(`/api/comment/likeComment/${commentId}`, {
        method: 'PUT',
      });
      if (res.ok) {
        const data = await res.json();
        setComments(
          comments.map((comment) =>
            comment._id === commentId
              ? {
                  ...comment,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : comment
          )
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async (comment, editedContent) => {
    setComments(
      comments.map((c) =>
        c._id === comment._id ? { ...c, content: editedContent } : c
      )
    );
  };

  const handleDelete = async (commentId) => {
    setShowModal(false);
    try {
      if (!user) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(`/api/comment/deleteComment/${commentId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        const data = await res.json();
        setComments(comments.filter((comment) => comment._id !== commentId));
      }
    } catch (error) {
      console.log(error.message);
    }
  };
 */
console.log(comments);
  return (
    <>
     
    <div className="w3-container w3-margin w3-row  w3-card " style={{ width:  365}}>
    {comments.length === 0 ? <p>Nus comentarii</p> :   <div>   
    <ul className="w3-ul w3-white">
    
    <li className="w3-padding-6">

    {comments?.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
             
             // onLike={handleLike}
             // onEdit={handleEdit}
             // onDelete={(commentId) => {
              //  setShowModal(true);
              //  setCommentToDelete(commentId);
             // }}
            />
          ))
   
            }       

</li>
</ul>
</div>
            }

 <CommentInput
   postId={postId}
   handleSubmit={handleSubmit}  
   setComment={setComment}/>

</div>

</>

  )
}
