import React, { useCallback, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { services } from '../appwrite/services'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Input from "./Input"
import Select from "./Select"
import Button from "./Button"
import BlogEditor from './BlogEditor'

function PostForm({ post }) {
  console.log("PostForm rendered");
  const navigate = useNavigate()
  const userData = useSelector(state => state.userData)
  console.log("User data:", userData);

  const { register, handleSubmit, getValues, control, watch, setValue } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active"
    }
  })

  const upload = async (data) => {
    try {
      if (post) {
        const file = data.image?.[0] ? await services.uploadFile(data.image[0]) : null
        if (file) services.deleteFile(post.coverImage)
        const dbPost = await services.updatePost(post.$id, { ...data, coverImage: file ? file.$id : undefined })
        if (dbPost) navigate(`/post/${dbPost.slug}`)
      } else {
        const file = await services.uploadFile(data.image[0])
        if (file) {
          data.coverImage = file.$id
          const dbPost = await services.addPost({ ...data, userId: userData.$id })
          if (dbPost) navigate(`/post/${dbPost.slug}`)
        }
      }
    } catch (error) {
      console.log("Error updating post", error);
    }
  };  // <--- FIXED HERE

  const slugTransform = useCallback((title) => {
    if (title && typeof title === "string") {
      return title.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, "-").replace(/\s/g, "-")
    }
    return ""
  }, [])

  useEffect(() => {
    const subscribe = watch((value, { name }) => {
      if (name === "title") setValue("slug", slugTransform(value.title))
    })
    return () => subscribe.unsubscribe()
  }, [watch, setValue, slugTransform])

  return (
    <form 
      onSubmit={handleSubmit(upload)} 
      className="flex flex-wrap p-6 bg-amber-50 rounded-2xl shadow-lg space-y-6 md:space-y-0"
    >
      <div className="w-full md:w-7/12 px-2 space-y-6">
        <Input 
          type="text" 
          label="Title" 
          placeholder="Enter Title"
          className="bg-white border border-amber-300"
          {...register("title",{ required: true })}
        />
        <Input 
          type="text"
          label="Slug"
          placeholder="Enter Slug"
          className="bg-white border border-amber-300"
          {...register("slug",{ required: true })}
          onInput={(e)=> setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate:true })}
        />
        <BlogEditor 
          control={control} 
          name="content" 
          defaultValue={post ? post.content : ""} 
        />
      </div>

      <div className="w-full md:w-5/12 px-2 space-y-6 pt-4 md:pt-0">
        <Input 
          type="file"
          label="Cover Image"
          className="block w-full"
          {...register("image",{ required: !post })}
        />
        {post && (
          <div className="w-full">
            <img 
              src={services.filePreview(post.coverImage)} 
              alt={post.title}
              className="rounded-xl object-cover w-full h-auto border border-amber-200"
            />
          </div>
        )}
        <Select options={["active","not-active"]} label="Status" />
        <Button 
          type="submit" 
          className="w-full py-2 px-4 rounded-lg"
        >
          {post ? "Update Post" : "Add Post"}
        </Button>
      </div>
    </form>
  )
}

export default PostForm
