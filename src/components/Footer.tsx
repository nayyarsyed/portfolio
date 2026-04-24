import React from 'react';
import { Link2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-900 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-tighter text-white">
              SYED NAYYAR <span className="text-zinc-600 font-light">MANSOOR</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">
              Enterprise Data Architect & Strategy Leader. Transforming complexity into clarity.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Social</h4>
              <a href={portfolioData.about.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-zinc-500 hover:text-white transition-colors text-sm">
                <Link2 size={16} className="mr-3" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Syed Nayyar Mansoor. Designed for Excellence.
          </div>
          <div className="text-xs text-zinc-600">
            Based in Melbourne, Australia
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
