
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
//import axios from 'axios'
import ProfileCard from '../../components/Profileomponents/ProfileCard/ProfileCard'
import Blog from '../../components/Blog/Blog'
import Footer from '../../components/Footer/Footer'
import Headers from '../../components/Headers/Headers'
import PopularPosts from '../../components/Post/PopularPosts/PopularPosts'
import Tags from '../../components/Tags/Tags'
import { getPosts  } from '../../features/posts/postSlice'
import { useSelector, useDispatch } from 'react-redux'




export default function Home() {
  const { user, isLoading,} = useSelector((state) => state.auth)
/*
  const [posts, setPosts] = useState([]);
console.log(posts);
  //get blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("/api/posts/");

      if (data?.success) {
        
        setPosts(data?.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };
      

  useEffect(() => {
    getAllBlogs();
  }, []);

*/

const { posts, } = useSelector((state) => state.posts);
const dispatch = useDispatch();

const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //const [recentPosts, setRecentPosts] = useState(null);
 // const [posts, setPosts] = useState([]);

 useEffect(() => {
 
  dispatch(getPosts())
  
}, [dispatch]);

console.log(posts);
/*
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts/getposts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
*/
/*
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPosts(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);*/
  return (
  <>
  <div>
        {isLoading ? <div> loadig</div>  : 
          <div> <Headers user={user}/>

            

                <div className="w3-row">

                  <div className="w3-col l8 s12">
                   <Blog user={user} posts={posts.posts}/>
                  </div>

                      <div className="w3-col l4">
                         <ProfileCard  user={user}/>
                         <PopularPosts  posts={posts.posts}/>
                         <Tags/>
                      </div>

                </div>

            

          </div> 
                  
        }            <Footer/> 
         
</div>

  </>
  )
}
