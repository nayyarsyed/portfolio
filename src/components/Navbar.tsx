import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-bold tracking-tighter text-white">
              SYED NAYYAR <span className="text-zinc-600 font-light">MANSOOR</span>
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-10">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-xs font-bold tracking-[0.2em] transition-all duration-300 ${isActive ? 'text-white' : 'text-zinc-500 hover:text-white'}`
              }
            >
              ABOUT
            </NavLink>
            <NavLink 
              to="/journey" 
              className={({ isActive }) => 
                `text-xs font-bold tracking-[0.2em] transition-all duration-300 ${isActive ? 'text-white' : 'text-zinc-500 hover:text-white'}`
              }
            >
              JOURNEY
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `text-xs font-bold tracking-[0.2em] transition-all duration-300 ${isActive ? 'text-white' : 'text-zinc-500 hover:text-white'}`
              }
            >
              PROJECTS
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
