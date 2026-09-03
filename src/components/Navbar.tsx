import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/themeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'ABOUT', path: '/' },
    { name: 'JOURNEY', path: '/journey' },
    { name: 'PROJECTS', path: '/projects' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink 
              to="/" 
              onClick={closeMenu}
              className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white"
            >
              SYED NAYYAR <span className="text-zinc-400 dark:text-zinc-600 font-light">MANSOOR</span>
            </NavLink>
          </div>

          {/* Desktop Right: Navigation Links + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs font-bold tracking-[0.2em] transition-all duration-300 ${
                      isActive 
                        ? 'text-zinc-900 dark:text-white' 
                        : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-800"></div>

            {/* Theme Toggle Button (Desktop Top Right) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700/80 bg-zinc-100/80 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-200 hover:scale-105 active:scale-95 transition-all shadow-xs cursor-pointer"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={16} className="text-amber-400 animate-in spin-in-180 duration-300" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-300">Light</span>
                </>
              ) : (
                <>
                  <Moon size={16} className="text-indigo-600 animate-in spin-in-180 duration-300" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-700">Dark</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Top Right: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 transition-transform active:scale-90"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-indigo-600" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors focus:outline-none"
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
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-900 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-2xl px-6 py-6 transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-sm font-bold tracking-[0.2em] py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'text-zinc-900 bg-zinc-100 dark:text-white dark:bg-zinc-900'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-900/50'
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
