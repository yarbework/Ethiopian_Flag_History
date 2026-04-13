import React from 'react';
import { Link } from 'react-router-dom';
import { emblemsData } from '../../data/emblemsData';
import HistoryCard from './HistoryCard';

const FeaturedEmblems = () => {
  const featured = emblemsData.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-dark-charcoal">National Emblems</h2>
            <p className="text-gray-600 mt-1">Symbols of sovereignty and identity through the ages</p>
          </div>
          <Link to="/emblems" className="text-ethio-green font-semibold hover:text-emblem-blue transition-colors flex items-center gap-1">
            View All <span>&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((emblem) => (
            <HistoryCard 
              key={emblem.id}
              {...emblem}
              onClick={() => window.location.href = '/emblems'} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEmblems;