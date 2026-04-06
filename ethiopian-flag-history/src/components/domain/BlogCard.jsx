import React from 'react';

const BlogCard = ({ title, excerpt, author, readTime, category, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <span className="text-xs font-bold text-ethio-green bg-green-50 px-2 py-1 rounded">
          {category}
        </span>
        <h3 className="text-xl font-bold mt-2 text-dark-charcoal font-serif">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{excerpt}</p>
        <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
          <span>{author}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;