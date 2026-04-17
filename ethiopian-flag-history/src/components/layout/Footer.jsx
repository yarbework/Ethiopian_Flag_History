import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer className="bg-emblem-blue text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6"> 
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        <div>
            <div className="flex items-center gap-2 mb-4">
                <div className="flex flex- h-6 w-2">
                    <div className="flex-1 bg-ethio-green"></div>
                    <div className="flex-1 bg-ethio-yellow"></div>
                    <div className="flex-1 bg-ethio-red"></div>
                </div>
                <h2 className="text-xl font-bold">Ethiopian Flag</h2>
            </div>
                <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
                    Exploring the rich history and symbolism of Ethiopia's national flag through the ages.
                </p>
            </div>

        <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-blue-100">
                <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                <li><Link to="/flags" className="hover:text-white transition">Historical Flags</Link></li>
                <li><Link to="/emblems" className="hover:text-white transition">National Emblems</Link></li>
                <li><Link to="/blog" className="hover:text-white transition">Blog & Articles</Link></li>
            </ul>
        </div>

            <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            {/* <div className="flex gap-4">
                {[Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="@yarbework" className="bg-blue-800 p-2 rounded-full hover:bg-white hover:text-emblem-blue transition-all">
                    <Icon size={20} />
                </a>
                ))}
            </div> */}
            </div>
        </div>

        <div className="border-t border-blue-700/50 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <p>© 2026 Ethiopian Flag History. Educational Resource.</p>
        
        <div className="flex w-40 h-1 rounded-sm overflow-hidden">
            <div className="flex-1 bg-ethio-green"></div>
            <div className="flex-1 bg-ethio-yellow"></div>
            <div className="flex-1 bg-ethio-red"></div>
            </div>
        </div>
        </div>
    </footer>
    );
};

export default Footer;