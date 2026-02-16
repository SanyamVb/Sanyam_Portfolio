import { useEffect, useRef, useState } from 'react';
import { Download, Lightbulb, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const highlights = [
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Adapting quickly to new technologies and domains',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Thinker',
      description: 'Bringing fresh perspectives to every project',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#7e6ee3] text-sm font-medium tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The Architect
          </h2>
        </div>

        {/* Main Content Card */}
        <div
          className={`relative glass-card rounded-3xl p-8 sm:p-12 mb-16 overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{
            transitionDelay: '0.2s',
            transform: isVisible
              ? `perspective(1000px) rotateX(${(mousePos.y - 0.5) * -5}deg) rotateY(${(mousePos.x - 0.5) * 5}deg)`
              : 'none',
          }}
        >
          {/* Glare Effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(126, 110, 227, 0.15) 0%, transparent 50%)`,
            }}
          />

          <div className="relative z-10">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-6">
              I'm an <span className="text-[#7e6ee3] font-semibold">AI Engineer</span> with a passion for building 
              systems that think. Currently at <span className="text-white font-semibold">Bayer</span>, I architect 
              enterprise-scale AI platforms serving <span className="text-[#7e6ee3] font-semibold">500+ users</span> with 
              sub-100ms latency.
            </p>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
              My journey from <span className="text-white font-semibold">IIT Delhi</span> to the forefront of AI has 
              been driven by one principle: <span className="text-[#7e6ee3] font-semibold italic">"Figure it out."</span> 
              Whether it's optimizing systems or creating real-time production grade voice agents, I thrive on turning the impossible into the inevitable.
            </p>

            {/* Philosophy Quote */}
            <div className="border-l-4 border-[#7e6ee3] pl-6 py-2 mb-8">
              <p className="text-white/60 italic text-lg">
                "I have a 'figuring out' mentality, and I have always proven work delivery even if it 
                meant learning new things, putting in extra hours, and somehow figuring it out."
              </p>
            </div>

            <a
              href="/Sanyam_s_Resume_latest.pdf"
              download
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-[#7e6ee3] hover:bg-[#6b5ed1] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`glass-card rounded-2xl p-6 text-center group hover:border-[#7e6ee3]/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#7e6ee3]/10 flex items-center justify-center group-hover:bg-[#7e6ee3]/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-[#7e6ee3]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
