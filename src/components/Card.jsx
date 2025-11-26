import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({c}) => {
  return (
 <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <img 
    src={c?.image} 
    alt={c?.title}
    className="w-full h-40 object-cover"
  />

  <div className="p-4 space-y-2">
    
    {/* Category Badge */}
    <span className="inline-block bg-green-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">
      {c?.category}
    </span>

    {/* Title */}
    <h3 className="text-lg font-semibold text-gray-800">{c?.title}</h3>

    {/* Price & Date */}
    <div className="flex items-center justify-between">
      <span className="text-indigo-600 font-bold">${c?.price}</span>
      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded">
        {c?.date}
      </span>
    </div>
      <Link href={`details/${c?._id}`} className="btn btn-outline hover:text-blue-400 w-full mt-4">View More</Link>
  </div>

</div>



  );
};

export default Card;
