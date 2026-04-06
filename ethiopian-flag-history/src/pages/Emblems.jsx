import React, { useState } from 'react';
import { emblemsData } from '../data/emblemsData';
import HistoryCard from '../components/domain/HistoryCard';
import DetailModal from '../components/domain/DetailModal';

const Emblems = () => {
  const [selectedEmblem, setSelectedEmblem] = useState(null);

  return (
    <div className="py-8">
      <h2 className="text-3xl font-serif font-bold mb-8 text-dark-charcoal">
        National Emblems of Ethiopia
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emblemsData.map((emblem) => (
          <HistoryCard 
            key={emblem.id}
            title={emblem.title}
            era={emblem.era}
            image={emblem.image}
            onClick={() => setSelectedEmblem(emblem)}
          />
        ))}
      </div>

      {selectedEmblem && (
        <DetailModal 
          item={selectedEmblem} 
          onClose={() => setSelectedEmblem(null)} 
        />
      )}
    </div>
  );
};

export default Emblems;