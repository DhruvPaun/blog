import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { services } from "../../appwrite/services";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import Button from "../Button";

function Post() {
  // const { slug } = useParams();
  // const [post, setPost] = useState(null);
  // const userData = useSelector((state) => state.userData);
  // const navigate = useNavigate();

  // // Fetch post data on mount or slug change
  // useEffect(() => {
  //   if (slug) {
  //     services.getPost(slug).then((post) => {
  //       if (post) setPost(post);
  //       else navigate("/");
  //     });
  //   } else {
  //     navigate("/");
  //   }
  // }, [slug, navigate]);

  // // Check if the current user is the author
  // const isAuthor = post && userData ? post.userId === userData.$id : false;

  // // Handler for deleting the post
  // async function deletePost() {
  //   await services.deletePost(post.$id).then((status) => {
  //     if (status) {
  //       services.deleteFile(post.coverImage);
  //       navigate("/all-post");
  //     }
  //   });
  // }

  // // Conditional rendering of the post content
  // return post ? (
  //   <div className="py-12 bg-gradient-to-b from-amber-50 to-orange-100 min-h-screen">
  //     <div className="max-w-4xl mx-auto px-4">
  //       {/* Image + Action Buttons */}
  //       <div className="relative mb-10 bg-white border border-amber-100 rounded-2xl shadow-md overflow-hidden">
  //         <img
  //           src={services.filePreview(post.coverImage)}
  //           alt={post.title}
  //           className="w-full max-h-[480px] object-cover rounded-t-2xl"
  //         />

  //         {/* Action Buttons (only visible to the author) */}
  //         {isAuthor && (
  //           <div className="absolute top-4 right-4 flex space-x-2">
  //             <Link to={`/edit-post/${post.$id}`}>
  //               <Button
  //                 bgColor="bg-amber-500"
  //                 className="hover:bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-sm transition-all duration-200"
  //               >
  //                 Edit
  //               </Button>
  //             </Link>

  //             <Button
  //               onClick={deletePost}
  //               bgColor="bg-red-500"
  //               className="hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-sm transition-all duration-200"
  //             >
  //               Delete
  //             </Button>
  //           </div>
  //         )}
  //       </div>

  //       {/* Post Title */}
  //       <div className="mb-6 text-center">
  //         <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-800 leading-tight mb-3">
  //           {post.title}
  //         </h1>
  //         <p className="text-sm text-stone-500">
  //           {new Date(post.$createdAt).toLocaleDateString("en-US", {
  //             year: "numeric",
  //             month: "long",
  //             day: "numeric",
  //           })}
  //         </p>
  //       </div>

  //       {/* Content */}
  //       <div className="bg-white p-8 rounded-2xl shadow-md border border-amber-100">
  //         <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed">
  //           {parse(post.content)}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // ) : (
  //   // Loading State
  //   <div className="flex items-center justify-center h-screen bg-amber-50 text-xl font-semibold text-stone-600 animate-pulse">
  //     Loading Post...
  //   </div>
  // );
  return <div>Post Component Under Maintenance</div>;
}

export default Post;
