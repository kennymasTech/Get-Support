import React, { useEffect } from 'react'
import { axiosPrivate } from '../api/axios'

const AllPosts = () => {
    useEffect(() => {
     const getPosts = async () => {
        try {
            const response = await axiosPrivate.get(
              "/creators/posts",
              {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
              }
            );
            console.log(response);
          } catch (error) {
            console.log(error);
          }
     }
     getPosts()
    }, [])
    
  return (
    <div>AllPosts</div>
  )
}

export default AllPosts