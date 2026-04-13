import React from 'react';

const colors = [
  { name: 'Green', meaning: 'Represents the fertility of the land, hope, and Ethiopia\'s natural wealth.', bg: 'bg-ethio-green' },
  { name: 'Yellow', meaning: 'Symbolizes religious freedom, peace, and the diverse cultures of Ethiopia.', bg: 'bg-ethio-yellow' },
  { name: 'Red', meaning: 'Represents sacrifice for freedom and equality, and the blood of patriots.', bg: 'bg-ethio-red' }
];

const ColorSignificance = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-serif font-bold mb-10 text-center">About the Colors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {colors.map((c) => (
          <div key={c.name} className="p-6 border-l-4 border-gray-100 bg-off-white hover:border-emblem-blue transition-all">
            <div className={`w-12 h-12 ${c.bg} rounded-full mb-4`}></div>
            <h3 className="text-xl font-bold font-serif">{c.name}</h3>
            <p className="text-gray-600 mt-2">{c.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ColorSignificance;