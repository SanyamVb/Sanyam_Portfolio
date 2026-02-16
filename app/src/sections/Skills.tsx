import { useEffect, useRef, useState } from 'react';
import { Code2, Layers, Wrench, Cloud } from 'lucide-react';

interface Skill {
  name: string;
  level?: string;
}

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const categories: SkillCategory[] = [
    {
      icon: Code2,
      title: 'Programming',
      skills: [
        { name: 'Python', level: 'Expert' },
        { name: 'C++', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'SQL', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MySQL', level: 'Advanced' },
      ],
    },
    {
      icon: Layers,
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'LangChain', level: 'Expert' },
        { name: 'LangGraph', level: 'Expert' },
        { name: 'LlamaIndex', level: 'Expert' },
        { name: 'LiveKit', level: 'Advanced' },
        { name: 'FastAPI', level: 'Expert' },
        { name: 'Streamlit', level: 'Expert' },
        { name: 'TensorFlow', level: 'Advanced' },
        { name: 'PyTorch', level: 'Advanced' },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Docker', level: 'Advanced' },
        { name: 'AWS', level: 'Advanced' },
        { name: 'Neo4j', level: 'Advanced' },
        { name: 'MLflow', level: 'Advanced' },
        { name: 'Airflow', level: 'Intermediate' },
        { name: 'Git', level: 'Expert' },
        { name: 'GitHub Actions', level: 'Advanced' },
      ],
    },
    {
      icon: Cloud,
      title: 'Data & AI',
      skills: [
        { name: 'NumPy', level: 'Expert' },
        { name: 'Pandas', level: 'Expert' },
        { name: 'Scikit-learn', level: 'Expert' },
        { name: 'OpenCV', level: 'Advanced' },
        { name: 'Redis', level: 'Advanced' },
        { name: 'WebRTC', level: 'Intermediate' },
        { name: 'REST APIs', level: 'Expert' },
        { name: 'GraphQL', level: 'Intermediate' },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#7e6ee3] text-sm font-medium tracking-wider uppercase mb-4 block">
            Technical Arsenal
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            in AI/ML engineering and software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`glass-card rounded-3xl p-8 transition-all duration-1000 hover:border-[#7e6ee3]/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.2 + catIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#7e6ee3]/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-[#7e6ee3]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills Cloud */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group relative"
                    style={{
                      animation: isVisible ? `float ${4 + Math.random() * 2}s ease-in-out infinite` : 'none',
                      animationDelay: `${skillIndex * 0.2}s`,
                    }}
                  >
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-[#7e6ee3]/20 hover:border-[#7e6ee3]/40 hover:text-white transition-all duration-300 cursor-default">
                      {skill.name}
                    </span>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#7e6ee3] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {skill.level}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7e6ee3] rotate-45" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          {[
            { value: '15+', label: 'Technologies' },
            { value: '5+', label: 'Frameworks' },
            { value: '1+', label: 'Years Experience' },
            { value: '10+', label: 'Projects' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#7e6ee3] mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
