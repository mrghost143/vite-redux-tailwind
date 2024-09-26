import React, { useState } from 'react';
import "./header.scss"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <header className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold">My App</h1>
                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none"
                >
                    {/* Hamburger Icon */}
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <nav className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:space-x-4">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="block px-4 py-2 hover:bg-gray-700">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
