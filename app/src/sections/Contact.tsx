import { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'SanyamVb',
      href: 'https://github.com/SanyamVb',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sanyam-verma',
      href: 'https://linkedin.com/in/sanyam-verma',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'sanyamv.iitd@gmail.com',
      href: 'mailto:sanyamv.iitd@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8287393623',
      href: 'tel:+918287393623',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
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
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Initiate Contact
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/80 text-sm mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#7e6ee3] focus:ring-[#7e6ee3]/20 rounded-xl h-12"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#7e6ee3] focus:ring-[#7e6ee3]/20 rounded-xl h-12"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm mb-2">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#7e6ee3] focus:ring-[#7e6ee3]/20 rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full h-12 rounded-xl text-lg font-medium transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 hover:bg-green-500'
                    : 'bg-[#7e6ee3] hover:bg-[#6b5ed1]'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>Message Sent!</>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Links */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Connect With Me
              </h3>
              
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-[#7e6ee3]/10 border border-transparent hover:border-[#7e6ee3]/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#7e6ee3]/10 flex items-center justify-center group-hover:bg-[#7e6ee3]/20 transition-colors duration-300">
                      <link.icon className="w-5 h-5 text-[#7e6ee3]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-sm">{link.label}</p>
                      <p className="text-white font-medium">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-[#7e6ee3] mb-1">24h</div>
                <div className="text-white/60 text-sm">Response Time</div>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-[#7e6ee3] mb-1">100%</div>
                <div className="text-white/60 text-sm">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
