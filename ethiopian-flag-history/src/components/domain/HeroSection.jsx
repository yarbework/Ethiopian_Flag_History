import React from 'react';
import heroFlag from '../../assets/HeroFlag.png';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroFlag})` }} 
      >
        <div className="absolute inset-0 bg-gradient-to-r from-ethio-green/90 to-ethio-red/90 opacity-90"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <div className="text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            The History of Ethiopian Flags
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md">
            Discover the rich symbolism and evolution of Ethiopia's flag through centuries of sovereignty, resistance, and pride.
          </p>
          <div className="flex gap-4">
            <button className="bg-ethio-yellow text-black font-bold px-8 py-3 rounded hover:bg-yellow-400 transition shadow-lg">
              Explore History
            </button>
            <button className="border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition">
              View Emblems
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-end">
          <img 
            src={heroFlag} 
            alt="Ethiopian Flag" 
            className="w-full max-w-md drop-shadow-2xl animate-float"
          />
        </div>
      </div>

      <div 
        className="absolute bottom-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: 'polygon(0 80%, 100% 0, 100% 100%, 0% 100%)' }}
      ></div>
    </section>
  );
};

export default HeroSection;