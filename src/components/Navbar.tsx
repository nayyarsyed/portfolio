import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'ABOUT', path: '/' },
    { name: 'JOURNEY', path: '/journey' },
    { name: 'PROJECTS', path: '/projects' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <NavLink 
              to="/" 
              onClick={closeMenu}
              className="text-xl font-bold tracking-tighter text-white"
            >
              SYED NAYYAR <span className="text-zinc-600 font-light">MANSOOR</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-bold tracking-[0.2em] transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-zinc-500 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-900 bg-[#0a0a0a]/95 backdrop-blur-2xl px-6 py-6 transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-sm font-bold tracking-[0.2em] py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'text-white bg-zinc-900'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
