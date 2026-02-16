import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">Sanyam Verma</h3>
            <p className="text-white/50 text-sm">AI Engineer & Machine Learning Specialist</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SanyamVb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#7e6ee3]/20 hover:text-[#7e6ee3] transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sanyam-verma"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#7e6ee3]/20 hover:text-[#7e6ee3] transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sanyamv.iitd@gmail.com"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#7e6ee3]/20 hover:text-[#7e6ee3] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#7e6ee3]/10 flex items-center justify-center text-[#7e6ee3] hover:bg-[#7e6ee3]/20 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/5" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>
            &copy; {currentYear} Sanyam Verma. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-4 h-4 text-[#7e6ee3] fill-[#7e6ee3]" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
