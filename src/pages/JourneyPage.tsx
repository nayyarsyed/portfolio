import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, ArrowRight } from 'lucide-react';

const JourneyPage: React.FC = () => {
  const { journey } = portfolioData;
  const colors = ["#F5D17E", "#7EE6CE", "#B5A9E5", "#50B6FC"];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-6 lg:px-20 overflow-hidden relative">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7EE6CE]/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-24 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Career <span className="text-zinc-600">Timeline</span></h1>
          <p className="text-zinc-400 text-xl max-w-2xl font-light leading-relaxed">
            Two decades of professional evolution, architecting data ecosystems across global markets.
          </p>
          <div className="h-px w-full bg-zinc-900 mt-12"></div>
        </div>

        {/* Timeline List */}
        <div className="space-y-4">
          {journey.map((exp, index) => {
            const itemColor = colors[index % colors.length];
            return (
              <div 
                key={index} 
                className="group relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:gap-16 py-12 border-b border-zinc-900 last:border-0 hover:bg-zinc-900/40 transition-all duration-500 px-8 rounded-3xl"
              >
                {/* Year & Country */}
                <div className="flex flex-col space-y-3">
                  <div 
                    className="text-3xl font-bold transition-all duration-500 group-hover:scale-110 origin-left"
                    style={{ color: '#ffffff' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = itemColor}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
                  >
                    {exp.year}
                    <span className="ml-3 text-xl opacity-80">{exp.countryFlag}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-px w-8 bg-zinc-800 group-hover:w-12 transition-all duration-500 mr-3" style={{ backgroundColor: itemColor }}></div>
                    <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                      {exp.year === "2026" ? "PRESENT" : "PREVIOUS"}
                    </div>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold group-hover:text-white transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center text-zinc-400 mt-3 gap-y-2">
                      <span className="font-semibold text-zinc-200 group-hover:text-white transition-colors">{exp.company}</span>
                      <span className="mx-3 text-zinc-800">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2 text-zinc-600" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                        <ArrowRight size={14} className="mr-3 mt-1 flex-shrink-0 transition-colors" style={{ color: itemColor }} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Side Accent */}
                <div 
                  className="absolute left-0 top-1/4 w-1 h-0 group-hover:h-1/2 transition-all duration-500 rounded-full"
                  style={{ backgroundColor: itemColor }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JourneyPage;
