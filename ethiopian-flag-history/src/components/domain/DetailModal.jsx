import React from 'react';
import { X } from 'lucide-react';

const DetailModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      
      <div className="bg-white rounded-2xl w-full max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <X size={20} />
        </button>

        <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
        
        <div className="p-6">
          <span className="text-sm font-bold text-ethio-green uppercase">{item.era}</span>
          <h2 className="text-2xl font-serif font-bold text-dark-charcoal mt-2">{item.title}</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">{item.description}</p>
          
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h4 className="text-sm font-bold uppercase text-gray-400">References</h4>
            <ul className="text-xs text-gray-500 mt-2 space-y-1">
              {item.citations?.map((ref, idx) => <li key={idx}>• {ref}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;