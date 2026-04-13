import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../../data/blogData'; 
import BlogCard from './BlogCard'; 

const FeaturedBlogs = () => {
  const featured = blogData.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-dark-charcoal">Recent Insights</h2>
            <p className="text-gray-600 mt-1">Deep dives into history, culture, and symbolism</p>
          </div>
          <Link to="/blog" className="text-ethio-green font-semibold hover:text-emblem-blue transition-colors flex items-center gap-1">
            All Articles <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((blog) => (
            <BlogCard 
              key={blog.id}
              {...blog} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;