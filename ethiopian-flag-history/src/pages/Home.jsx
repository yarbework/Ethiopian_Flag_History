import React from 'react';
import HeroSection from '../components/domain/HeroSection';
import FeaturedFlags from '../components/domain/FeaturedFlags';
import FeaturedEmblems from '../components/domain/FeaturedEmblems';
import FeaturedBlogs from '../components/domain/FeaturedBlogs';
import ColorSignificance from '../components/domain/ColorSignificance';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedFlags />
      <FeaturedEmblems />
      <FeaturedBlogs />
      <ColorSignificance />
      
      <section className="py-16 bg-off-white text-center">
        <h3 className="text-2xl font-serif font-bold mb-6">Ready to dive deeper?</h3>
        <Link to="/flags" className="text-emblem-blue font-bold text-lg hover:underline">
          Browse the full timeline of flags &rarr;
        </Link>
      </section>
    </div>
  );
};

export default Home;