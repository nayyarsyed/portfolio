export interface Project {
  id: string;
  title: string;
  role: string;
  company: string;
  description: string;
  image?: string;
  metrics: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  industry: string;
  tools: string[];
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  location: string;
  countryFlag: string;
  details: string[];
}

export const portfolioData = {
  about: {
    name: "Syed Nayyar Mansoor",
    title: "Enterprise Data Architect | Data Strategy Leader",
    location: "Melbourne, VIC",
    summary: "Transformational Data Leader and Enterprise Architect with 20 years of experience designing and executing mission-critical data ecosystems across Healthcare, Banking, Infrastructure, and Government sectors globally (UAE, NZ, Australia, USA). Expert in bridging the gap between C-suite strategic vision and enterprise technical execution.",
    email: "",
    phone: "",
    linkedin: "https://www.linkedin.com/in/syednayyar/",
    skills: {
      leadership: ["Enterprise Data Strategy", "C-Suite Advisory", "IT Operating Models", "ROI Optimization"],
      architecture: ["Modern Data Stack", "Medallion Architecture", "Microsoft Fabric", "Data Mesh", "Event-Driven Architecture"],
      governance: ["Information Security", "Defense-Grade Governance", "Row-Level Security (RLS)", "Master Data Management"],
      engineering: ["Azure Synapse", "Data Factory", "LLM-Driven Automation", "MCP", "Python", "T-SQL", "Digital Twins"]
    }
  },
  journey: [
    {
      year: "2026",
      title: "Enterprise Data Architect",
      company: "GHD (Project Aurora)",
      location: "Melbourne",
      countryFlag: "🇦🇺",
      details: ["Leading enterprise data architecture", "Transitioning legacy warehousing to Lakehouse", "Medallion Architecture Design"]
    },
    {
      year: "2024",
      title: "Senior BI Consultant",
      company: "GHD",
      location: "Melbourne",
      countryFlag: "🇦🇺",
      details: ["Digital Twin Innovation", "AI & Automation Strategy", "Performance Optimization"]
    },
    {
      year: "2023",
      title: "Manager Analytics",
      company: "Enquiro",
      location: "Melbourne",
      countryFlag: "🇦🇺",
      details: ["Revenue & Market Growth", "C-Suite Advisory", "Workflow Automation"]
    },
    {
      year: "2022",
      title: "Senior Consultant",
      company: "PwC NZ",
      location: "Auckland",
      countryFlag: "🇳🇿",
      details: ["National Governance & Scale", "Forensic Risk Mitigation", "Process Standardization"]
    },
    {
      year: "2020",
      title: "BI Analyst",
      company: "NZ Health Partnerships",
      location: "Auckland",
      countryFlag: "🇳🇿",
      details: ["System Integration Architecture", "Financial Compliance", "Automated Workflows"]
    },
    {
      year: "2015",
      title: "Business Analyst Project Manager",
      company: "Valentia Tech",
      location: "Auckland",
      countryFlag: "🇳🇿",
      details: ["National Digital Rollout", "Quality Assurance Leadership", "Telehealth Services Scaling"]
    }
  ] as Experience[],
  projects: [
    {
      id: "digital-twin-2d",
      title: "2D Animation Digital Twin with Live Analytics",
      role: "Lead Solution Architect",
      company: "GHD Digital",
      image: "asset-performance.gif",
      description: "Next-gen Digital Twin powered by Power BI and live sensor data. Orchestrated a unified dashboard that consolidates heterogeneous data sources to provide real-time asset performance monitoring. This solution significantly reduced engineering overhead by providing live updates and predictive status reporting for fixed assets.",
      metrics: [
        { label: "Data Consolidation", value: "80%", subtext: "Reduction in Manual Effort" },
        { label: "Status Accuracy", value: "Real-Time", subtext: "Live Sensor Integration" },
        { label: "Decision Support", value: "Instant", subtext: "Engineering Alerts" }
      ],
      industry: "Engineering & Utilities",
      tools: ["Power BI", "Live Sensors", "Digital Twin", "2D Animation", "Real-Time Analytics"]
    },
    {
      id: "project-aurora",
      title: "Project Aurora: Scalable Lakehouse Ecosystem",
      role: "Enterprise Data Architect",
      company: "GHD",
      description: "Architected foundational data layers (Bronze, Silver, Gold) and optimized pipelines to accelerate data ingestion and processing velocity.",
      metrics: [
        { label: "Data Ingestion", value: "50M+", subtext: "Records Handled" },
        { label: "Security", value: "RLS", subtext: "Defense-Grade" },
        { label: "Risk Mitigation", value: "Active", subtext: "Zero-Loss Migration" }
      ],
      industry: "Infrastructure",
      tools: ["Microsoft Fabric", "Azure Synapse", "Data Factory"]
    },
    {
      id: "digital-twin",
      title: "GIS-Powered Spatial Analytics Platform",
      role: "Senior BI Consultant",
      company: "GHD",
      description: "Integrated WKT files and Narclim Grid data for critical water infrastructure health forecasting.",
      metrics: [
        { label: "Dev Time", value: "60%", subtext: "Reduction" },
        { label: "Performance", value: "40%", subtext: "System Boost" },
        { label: "Automation", value: "MCP", subtext: "LLM Agents" }
      ],
      industry: "Utilities",
      tools: ["GIS Spatial Data", "Python", "T-SQL", "LLM"]
    },
    {
      id: "enquiro-analytics",
      title: "Revenue & Growth Analytics Engine",
      role: "Manager Analytics",
      company: "Enquiro",
      description: "Directed a high-performing analytics team to process 10M+ rows of traffic data, driving market expansion.",
      metrics: [
        { label: "Net Revenue", value: "$200k", subtext: "Net-New Revenue" },
        { label: "Market Share", value: "15%", subtext: "Increase" },
        { label: "FTE Saved", value: "2 Weeks", subtext: "Per Business Cycle" }
      ],
      industry: "Market Research",
      tools: ["KPI Dashboards", "Team Leadership", "Automation"]
    },
    {
      id: "national-healthcare",
      title: "National Healthcare COVID Response",
      role: "Senior Consultant",
      company: "PwC NZ",
      description: "Formulated and mapped 50+ critical business rules for absolute data integrity for over 1 million citizens.",
      metrics: [
        { label: "Integrity", value: "1M+", subtext: "Citizen Data" },
        { label: "Accuracy", value: "100%", subtext: "Fraud Detection" },
        { label: "Lead Time", value: "80%", subtext: "Reduction" }
      ],
      industry: "Healthcare",
      tools: ["SQL", "Alteryx", "Forensic ETL"]
    }
  ] as Project[]
};
