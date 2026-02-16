import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * -20}px, ${(mousePos.y - 0.5) * -20}px) scale(1.1)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <img
          src="/hero-bg.jpg"
          alt="AI Neural Network"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040404]/50 via-[#040404]/30 to-[#040404]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#7e6ee3] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Greeting Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/80">Available for opportunities</span>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <span className="text-white">Hi, I'm </span>
          <span className="text-gradient">Sanyam Verma</span>
        </h1>

        {/* Subheading */}
        <h2
          className={`text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 font-light transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          AI Engineer & Machine Learning Specialist
        </h2>

        {/* Description */}
        <p
          className={`text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          I architect intelligent systems that bridge the gap between complex algorithms 
          and real-world impact. From enterprise AI platforms to cutting-edge research, 
          I build the future.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="bg-[#7e6ee3] hover:bg-[#6b5ed1] text-white px-8 py-6 text-lg rounded-full animate-pulse-glow transition-all duration-300 hover:scale-105"
          >
            Explore My Work
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
          <a
            href="https://github.com/SanyamVb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              <Github className="mr-2 w-5 h-5" />
              View GitHub
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div
          className={`flex items-center justify-center gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <a
            href="https://github.com/SanyamVb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#7e6ee3] transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/sanyam-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#7e6ee3] transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:sanyamv.iitd@gmail.com"
            className="text-white/60 hover:text-[#7e6ee3] transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040404] to-transparent z-[5]" />
    </section>
  );
};

export default Hero;
