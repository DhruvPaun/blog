import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Postcard from '../Postcard'
import { services } from '../../appwrite/services'
import PostForm from '../PostForm'
function EditPost() {
    const {slug}=useParams()
    const [post,setPost]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
      if(slug)
      {
        services.getPost(slug).then((val)=>{
            if(val) setPost(val)
        })
      }else{
        navigate("/")
      }
    },[slug,navigate])
  return post ? (
    <div>
      <PostForm post={post}/>
    </div>
  ): null
}

export default EditPost
