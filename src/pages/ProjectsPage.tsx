import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cog, Database, Cloud, BarChart, ArrowUpRight } from 'lucide-react';

// Import assets directly so Vite processes them for production
import assetPerformanceGif from '../assets/asset-performance.gif';

const ProjectsPage: React.FC = () => {
  const { projects } = portfolioData;
  const colors = ["#F5D17E", "#7EE6CE", "#B5A9E5", "#50B6FC"];

  const getToolIcon = (tool: string) => {
    const t = tool.toLowerCase();
    if (t.includes('azure') || t.includes('cloud') || t.includes('fabric')) return <Cloud size={14} />;
    if (t.includes('sql') || t.includes('database') || t.includes('synapse')) return <Database size={14} />;
    if (t.includes('power bi') || t.includes('analytics') || t.includes('kpi')) return <BarChart size={14} />;
    return <Cog size={14} />;
  };

  // Helper to get the correct image source
  const getProjectImage = (imageName: string | undefined) => {
    if (imageName === 'asset-performance.gif') return assetPerformanceGif;
    return imageName;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-6 lg:px-20 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B5A9E5]/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Case <span className="text-zinc-600">Studies</span></h1>
          <p className="text-zinc-400 text-xl max-w-2xl font-light leading-relaxed">
            Data ecosystems engineered for high-value impact and operational efficiency.
          </p>
          <div className="h-px w-full bg-zinc-900 mt-12"></div>
        </div>

        <div className="space-y-32">
          {projects.map((project, idx) => {
            const itemColor = colors[idx % colors.length];
            const projectImage = getProjectImage(project.image);
            
            return (
              <div key={project.id} className="group relative">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">
                  
                  {/* Left Side: Content */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">0{idx + 1}</span>
                      <div className="h-px w-12 transition-all duration-500 group-hover:w-20" style={{ backgroundColor: itemColor }}></div>
                      <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">{project.company}</span>
                    </div>

                    <h2 
                      className="text-4xl md:text-6xl font-bold tracking-tight transition-colors duration-500"
                      onMouseEnter={(e) => e.currentTarget.style.color = itemColor}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
                    >
                      {project.title}
                    </h2>

                    {/* Project Image/GIF if available */}
                    {projectImage && (
                      <div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-800 group-hover:border-zinc-700 transition-all duration-500 aspect-video">
                        <img 
                          src={projectImage} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent"></div>
                      </div>
                    )}

                    <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.tools.map((tool) => (
                        <span key={tool} className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full text-xs font-medium text-zinc-400 transition-all duration-300 group-hover:border-zinc-700">
                          {React.cloneElement(getToolIcon(tool) as React.ReactElement<{ style?: React.CSSProperties }>, { style: { color: itemColor } })}
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Metrics Dashboard Style */}
                  <div className="space-y-4">
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm space-y-10 group-hover:bg-zinc-900/50 transition-all duration-500 group-hover:border-zinc-700">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Efficiency Metrics</span>
                        <ArrowUpRight size={18} style={{ color: itemColor }} className="group-hover:scale-125 transition-transform duration-500" />
                      </div>
                      
                      <div className="grid gap-8">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="space-y-2 group/metric">
                            <div className="text-4xl font-bold tracking-tighter text-white transition-all duration-300 group-hover/metric:translate-x-1">{metric.value}</div>
                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{metric.label}</div>
                            {metric.subtext && (
                              <div className="text-[10px] text-zinc-600 italic">{metric.subtext}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="px-8 flex items-center justify-between text-[10px] font-bold text-zinc-700 uppercase tracking-[0.2em]">
                      <span className="group-hover:text-zinc-500 transition-colors">{project.industry} Sector</span>
                      <span className="group-hover:text-zinc-500 transition-colors">Verified Success</span>
                    </div>
                  </div>

                </div>
                
                {/* Divider for next project */}
                <div className="absolute -bottom-16 left-0 w-full h-px bg-zinc-900/50"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
