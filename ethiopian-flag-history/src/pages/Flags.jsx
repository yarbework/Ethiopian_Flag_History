import React, {useState} from "react";
import HistoryCard from "../components/domain/HistoryCard";
import { flagsData } from "../data/flagsData";
import DetailModal from "../components/domain/DetailModal";

const Flags = () => {
    const [selectedFlag, setSelectedFlag] = useState(null);
    return (
        <div className="py-8 relative">
            <h2 className="text-3xl font-serif font-bold mb-8">Historical Flags of Ethiopia</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {flagsData.map((flag) => (
                    <HistoryCard
                        key={flag.id}
                        title={flag.title}
                        era={flag.era}
                        image={flag.image}
                        description={flag.description}
                        onClick={() => setSelectedFlag(flag)}
                    />
                ))}
            </div>
            {selectedFlag && (
                <DetailModal 
                item={selectedFlag} 
                onClose={() => setSelectedFlag (null)} 
                />
            )}
        </div>
    );
};

export default Flags;