import React from 'react';
import { blogData } from '../data/blogData';
import BlogCard from '../components/domain/BlogCard';

const Blog = () => {
  const [heroBlog, ...otherBlogs] = blogData;

  return (
    <div className="py-8">
      <h1 className="text-4xl font-serif font-bold text-dark-charcoal mb-8">Blog & Articles</h1>

      {heroBlog && (
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-6 md:flex gap-8 items-center border border-gray-100">
          <img src={heroBlog.image} className="w-full md:w-1/2 rounded-xl object-cover" alt="Hero" />
          <div className="mt-6 md:mt-0">
            <span className="text-ethio-green font-bold">{heroBlog.category}</span>
            <h2 className="text-3xl font-serif font-bold my-2">{heroBlog.title}</h2>
            <p className="text-gray-600">{heroBlog.excerpt}</p>
            <button className="mt-4 bg-ethio-green text-white px-6 py-2 rounded-lg">Read More</button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherBlogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;