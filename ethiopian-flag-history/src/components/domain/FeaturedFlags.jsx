import React from 'react';
import { Link } from 'react-router-dom';
import { flagsData } from '../../data/flagsData'; // Importing your data
import HistoryCard from './HistoryCard';

const FeaturedFlags = () => {
  // We only want the first 3 items for the homepage
  const featured = flagsData.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Row: Title on left, "View All" on right */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-dark-charcoal">Historical Flags</h2>
            <p className="text-gray-600 mt-1">Journey through Ethiopia's flag evolution across different eras</p>
          </div>
          <Link 
            to="/flags" 
            className="text-ethio-green font-semibold hover:text-emblem-blue transition-colors flex items-center gap-1"
          >
            View All <span>&rarr;</span>
          </Link>
        </div>

        {/* Grid: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((flag) => (
            <HistoryCard 
              key={flag.id}
              {...flag}
              // We don't need a modal here on the home page, 
              // or we can link them to the full flags page
              onClick={() => window.location.href = '/flags'} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFlags;