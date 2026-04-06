import React from "react";
const HistoryCard = ({title, era, image, onClick}) => {
    return (
        <div onClick={onClick}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100">
            <div className="aspect-[3/2] overflow-hidden">
                <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
        </div>
        <div className="p-4">
            <span className="text-xs font-semibold text-ethio-green uppercase tracking-wider">
            {era}
            </span>
            <h3 className="text-lg font-serif font-bold text-dark-charcoal mt-1 group-hover:text-emblem-blue transition-colors">
            {title}
            </h3>
        </div>

        </div>
    );
};

export default HistoryCard;