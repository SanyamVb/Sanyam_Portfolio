import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Trophy, Medal, Star, BookOpen } from 'lucide-react';

interface Achievement {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: string;
}

const Education = () => {
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

  const achievements: Achievement[] = [
    {
      icon: Trophy,
      title: 'Best BTP Award',
      description: 'Mrs. Malti Singh Memorial undergraduate award for Best B.Tech project',
      highlight: 'IIT Delhi',
    },
    {
      icon: Star,
      title: 'Letter of Recommendation',
      description: 'Endorsed by Vice President & Head, R&D, Wipro Enterprises',
    },
    {
      icon: Medal,
      title: 'Pro5.ai Certified',
      description: 'Ranked in the top 5% of professionals in Machine Learning',
      highlight: 'Top 5%',
    },
    {
      icon: Award,
      title: 'GATE 2025',
      description: 'Qualified Graduate Aptitude Test in Engineering - Data Science and AI',
    },
    {
      icon: Trophy,
      title: 'JEE Advanced 2021',
      description: 'Secured AIR-792 out of 1.4 lakh aspirants across India',
      highlight: 'AIR 792',
    },
    {
      icon: Medal,
      title: 'JEE Main 2021',
      description: 'Secured 99.3 percentile competing among 10.2 lakh aspirants',
      highlight: '99.3%ile',
    },
  ];

  const positions = [
    {
      title: 'Central Team Member',
      organization: 'IIT Delhi',
      period: 'Apr 2023 - May 2024',
      award: 'Significant Contribution Award',
    },
    {
      title: 'Department Head',
      organization: 'Infinity Hyperloop',
      period: 'Dec 2022 - Oct 2023',
      award: 'Wins at EHW-2023 & CHC-2023',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
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
            Academic Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Education & Achievements
          </h2>
        </div>

        {/* Education Card */}
        <div
          className={`glass-card rounded-3xl p-8 sm:p-10 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#7e6ee3]/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-[#7e6ee3]" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                B.Tech in Engineering and Computational Mechanics
              </h3>
              <p className="text-[#7e6ee3] font-medium mb-2">Indian Institute of Technology Delhi</p>
              <p className="text-white/60 text-sm mb-4">2021 - 2025</p>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning in Mechanics', 'Deep Learning', 'NLP', 'Knowledge Graphs', 'Voice Agents', 'Calculus', 'Linear Algebra'].map((course) => (
                  <span
                    key={course}
                    className="text-xs text-white/50 bg-white/5 px-3 py-1 rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`glass-card rounded-2xl p-6 group hover:border-[#7e6ee3]/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#7e6ee3]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7e6ee3]/20 transition-colors duration-300">
                  <achievement.icon className="w-5 h-5 text-[#7e6ee3]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-white">{achievement.title}</h4>
                    {achievement.highlight && (
                      <span className="text-xs bg-[#7e6ee3]/20 text-[#7e6ee3] px-2 py-0.5 rounded">
                        {achievement.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-white/60 text-sm">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Positions of Responsibility
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.9s' }}
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#7e6ee3]" />
            Positions of Responsibility
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((pos) => (
              <div
                key={pos.title}
                className="glass-card rounded-xl p-6 hover:border-[#7e6ee3]/30 transition-all duration-300"
              >
                <h4 className="font-semibold text-white mb-1">{pos.title}</h4>
                <p className="text-[#7e6ee3] text-sm mb-2">{pos.organization}</p>
                <p className="text-white/40 text-xs mb-3">{pos.period}</p>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Trophy className="w-4 h-4 text-[#7e6ee3]" />
                  {pos.award}
                </div>
              </div>
            ))} */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Education;
