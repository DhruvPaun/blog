import React, { useEffect, useState } from "react";
import { services } from "../../appwrite/services";
import Postcard from "../Postcard";

function AllPost() {
  const [posts, setPosts] = useState([]);

  // Use useEffect to run the fetching logic only once on mount
  useEffect(() => {
    // 1. Call the service to fetch posts
    services.getAllPost().then((post) => {
      // 2. Check if the post data is valid before updating state
      if (post) {
        setPosts(post.documents);
      }
    });
    
  // 3. The empty dependency array [] ensures the effect runs only once
  }, []); 

  return (
    <div className="w-full py-8">
      {/* Check if posts exist before mapping */}
      {posts.length > 0 ? (
        <div className="flex flex-wrap">
          {/* Correction: Use Postcard component within the map */}
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/4">
              {/* Ensure Postcard is rendered without a semicolon inside JSX */}
              <Postcard {...post} /> 
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl text-gray-500">
          No posts available.
        </div>
      )}
    </div>
  );
}

export default AllPost;