import { useEffect, useRef, useState } from 'react';
import { Building2, Calendar, MapPin, Award, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  achievements: string[];
  technologies: string[];
}

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences: ExperienceItem[] = [
    {
      company: 'Bayer',
      role: 'AI Engineer',
      period: 'July 2025 - Present',
      location: 'Bangalore, India',
      description: [
        'Architected the backend for Bayer Employee Assistant (enterprise internal platform) using a scalable FastAPI system serving 500+ users with <100ms average API latency and 99.9% uptime',
        'Implemented enterprise-grade authentication using Azure Active Directory (Azure AD SSO), OAuth2, JWT, and JWKS, handling 1,000+ daily auth events with secure token validation',
        'Developed 23 RESTful APIs using FastAPI + Pydantic with strict request/response validation, strong type safety, and clean API design',
        'Integrated Microsoft Graph APIs for enterprise automation, processing 500+ daily operations across Outlook, Calendar, Teams, and User services',
        'Engineered real-time session infrastructure using LiveKit, WebRTC, and async event handling, supporting 50+ concurrent connections with <300ms end-to-end latency',
        'Maintained 4,000+ lines of production Python using type hints, structured logging, and centralized exception handling framework',
      ],
      achievements: [
        '99.9% Uptime Achievement',
        '<100ms API Latency',
        '500+ Daily Active Users',
      ],
      technologies: ['FastAPI', 'Python', 'Azure AD', 'LiveKit', 'WebRTC', 'PostgreSQL', 'Docker'],
    },
    {
      company: 'Wipro Enterprises',
      role: 'Machine Learning Intern',
      period: 'May 2024 - July 2024',
      location: 'Bangalore, India',
      description: [
        'Automated & optimized finalization of the Cushioning parameter by extensive data manufacturing and custom-built model',
        'Leveraged advanced Data Engineering techniques, XGBoost, self-modified Monte-Carlo method, and Bayesian techniques',
        'Pioneered 2 Python-based GUIs using Streamlit, attained 91% accuracy while predicting final Cushioning parameters',
        'Achieved 720x increased efficiency for cushioning design parameters finalization; project implemented in firm\'s workflow',
      ],
      achievements: [
        'Awarded Pre-Placement Offer (PPO)',
        '720x Efficiency Improvement',
        '91% Model Accuracy',
        'LoR from VP & Head R&D',
      ],
      technologies: ['Python', 'XGBoost', 'Streamlit', 'Bayesian Methods', 'Monte Carlo', 'Pandas'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#7e6ee3] text-sm font-medium tracking-wider uppercase mb-4 block">
            Professional Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />
          
          {/* Animated Progress Line */}
          <div 
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-[#7e6ee3] to-[#7e6ee3]/50 md:-translate-x-px transition-all duration-1000"
            style={{ 
              height: isVisible ? '100%' : '0%',
              transitionDelay: '0.5s'
            }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div 
                  className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 md:-translate-x-2 -translate-x-2 ${
                    activeIndex === index 
                      ? 'bg-[#7e6ee3] border-[#7e6ee3] scale-125' 
                      : 'bg-[#040404] border-white/30'
                  }`}
                  style={{
                    boxShadow: activeIndex === index ? '0 0 20px rgba(126, 110, 227, 0.5)' : 'none'
                  }}
                />

                {/* Content Card */}
                <div 
                  className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'}`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="glass-card rounded-2xl p-6 sm:p-8 hover:border-[#7e6ee3]/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-[#7e6ee3]">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-white/40 text-sm mt-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                          <ChevronRight className="w-4 h-4 text-[#7e6ee3] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.achievements.map((achievement) => (
                        <Badge
                          key={achievement}
                          className="bg-[#7e6ee3]/10 text-[#7e6ee3] border border-[#7e6ee3]/30"
                        >
                          <Award className="w-3 h-3 mr-1" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
