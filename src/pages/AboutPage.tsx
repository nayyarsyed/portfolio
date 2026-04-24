import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { Award, GraduationCap, Briefcase, Shield, Layout, Cpu } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { about } = portfolioData;
  const navigate = useNavigate();

  const skillCategories = [
    { 
      title: "Executive Leadership", 
      skills: about.skills.leadership, 
      icon: <Briefcase size={24} />,
      color: "#F5D17E" // Gold
    },
    { 
      title: "Technical Engineering", 
      skills: about.skills.engineering, 
      icon: <Cpu size={24} />,
      color: "#7EE6CE" // Mint
    },
    { 
      title: "Enterprise Architecture", 
      skills: about.skills.architecture, 
      icon: <Layout size={24} />,
      color: "#B5A9E5" // Lavender
    },
    { 
      title: "Data Governance", 
      skills: about.skills.governance, 
      icon: <Shield size={24} />,
      color: "#50B6FC" // Blue
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-20 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-start space-y-8 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            {about.title}
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] max-w-5xl">
            Bridging <span className="text-zinc-500 italic">Strategy</span> <br />
            with <span className="text-zinc-100">Execution.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed font-light">
            {about.summary}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <div 
              onClick={() => navigate('/projects')}
              className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform cursor-pointer"
            >
              View Projects
            </div>
            <a 
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        {/* Animated Background Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#50B6FC]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-[#B5A9E5]/10 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">Core Expertise</h2>
            <div className="h-px w-20 bg-zinc-800"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60 transition-all duration-500 cursor-default"
                style={{ '--hover-color': category.color } as React.CSSProperties}
              >
                <div 
                  className="mb-8 p-4 w-fit rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-500 group-hover:scale-110"
                  style={{ color: '#71717a' }} // Default zinc-500
                  onMouseEnter={(e) => e.currentTarget.style.color = category.color}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#71717a'}
                >
                  {React.cloneElement(category.icon as React.ReactElement<{ className?: string; style?: React.CSSProperties }>, { 
                    className: "transition-colors duration-500",
                    style: { color: 'inherit' }
                  })}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs text-zinc-500 font-medium group-hover:text-zinc-400 transition-colors">
                      {skill} {sIdx < category.skills.length - 1 && "•"}
                    </span>
                  ))}
                </div>
                {/* Subtle bottom border on hover */}
                <div 
                  className="h-1 w-0 group-hover:w-full transition-all duration-500 mt-6 rounded-full"
                  style={{ backgroundColor: category.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Awards */}
      <section className="py-24 px-6 lg:px-20 bg-zinc-950/50 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div className="space-y-12">
            <h2 className="text-2xl font-bold flex items-center">
              <GraduationCap className="mr-4 text-zinc-400" /> Academic Foundation
            </h2>
            <div className="space-y-6">
              {[
                { title: "TOGAF Enterprise Architecture Certification", sub: "In Progress (Expected 2026)", color: "#B5A9E5" },
                { title: "Master’s in Computer Science", sub: "Post-Graduate Degree", color: "#7EE6CE" },
                { title: "Bachelor of Commerce", sub: "Undergraduate Degree", color: "#F5D17E" }
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-6 p-6 rounded-2xl hover:bg-zinc-900/50 transition-all duration-300">
                  <div className="w-1 h-12 rounded-full bg-zinc-800 group-hover:scale-y-110 transition-transform" style={{ backgroundColor: item.color }}></div>
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-zinc-500 italic text-sm">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="space-y-12">
            <h2 className="text-2xl font-bold flex items-center">
              <Award className="mr-4 text-zinc-400" /> Industry Recognition
            </h2>
            <div className="grid gap-6">
              {[
                { title: "Winner – LXRP Power BI Challenge", desc: "2024 Recognition for data visualization excellence.", tag: "Data Excellence", color: "#50B6FC" },
                { title: "“Out-of-the-Box Thinking Award”", desc: "For cross-functional dashboard delivery and innovative problem solving.", tag: "Innovation", color: "#F5D17E" }
              ].map((award, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity -mr-8 -mt-8 rounded-full" style={{ backgroundColor: award.color }}></div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-white">{award.title}</h4>
                  <p className="text-zinc-400 mb-6 text-sm">{award.desc}</p>
                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold text-zinc-300 bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                    {award.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
