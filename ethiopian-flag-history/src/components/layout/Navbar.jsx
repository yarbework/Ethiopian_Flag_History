import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="bg-white shadow-md sticky top-0 z-50 p-4">
            <div className="flex justify-between items-center">
                <div className="font-bold text-xl">Ethiopian Flag</div>
        
                    {/* Hamburger Icon */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                
                <div className="hidden md:flex gap-6">
                    <Link to="/">Home</Link>
                    <Link to="/flags">Flags</Link>
                    <Link to="/emblems">Emblems</Link>
                    <Link to="/blog">Blog</Link>
                    <button className="bg-ethio-green text-white px-4 py-2 rounded">Explore</button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4">
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/flags" onClick={() => setIsOpen(false)}>Flags</Link>
                <Link to="/emblems" onClick={() => setIsOpen(false)}>Emblems</Link>
                <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                <button className="bg-ethio-green text-white px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Explore</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;