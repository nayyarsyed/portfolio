import React from 'react';
import { Link2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100/70 dark:bg-[#0a0a0a] border-t border-zinc-200 dark:border-zinc-900 py-20 px-6 lg:px-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
              SYED NAYYAR <span className="text-zinc-400 dark:text-zinc-600 font-light">MANSOOR</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xs">
              Enterprise Data Architect & Strategy Leader. Transforming complexity into clarity.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Social</h4>
              <a 
                href={portfolioData.about.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-medium"
              >
                <Link2 size={16} className="mr-3 text-zinc-400 dark:text-zinc-600" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 md:p-6 text-center text-zinc-600 dark:text-zinc-400 text-sm shadow-xs">
          ✨ This portfolio was created entirely using the <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Gemini CLI</span> and <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Dev Agent</span> just through prompting!
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-zinc-500 dark:text-zinc-600">
            © {new Date().getFullYear()} Syed Nayyar Mansoor. Designed for Excellence.
          </div>
          <div className="flex items-center gap-4">
            <img src="https://visitor-badge.laobi.icu/badge?page_id=nayyarsyed.portfolio&left_color=gray&right_color=black" alt="Visitor Badge" />
            <div className="text-xs text-zinc-500 dark:text-zinc-600">
              Based in Melbourne, Australia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
