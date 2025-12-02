import { services } from "../appwrite/services";
import { Link } from "react-router-dom";
import React from 'react';

function Postcard({ $id, title, coverImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div
        className="
          w-full
          bg-amber-50
          rounded-2xl
          p-4
          shadow-md
          hover:shadow-lg
          transform
          hover:scale-[1.02]
          transition-all
          duration-300
          h-full
          flex
          flex-col
          justify-between
        "
      >
        {/* Image */}
        <div className="w-full mb-4 overflow-hidden rounded-xl">
          <img
            src={services.filePreview(coverImage)}
            alt={title}
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-amber-900 truncate text-center">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default Postcard;
