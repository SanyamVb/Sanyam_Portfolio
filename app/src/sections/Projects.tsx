import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Star, GitBranch } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  const projects: Project[] = [
    {
      title: 'ManahVeda E-Commerce Platform',
      description: 'Complete full-stack e-commerce platform for Ayurvedic supplements with admin panel, payment integration, and analytics. Features Node.js REST API, MySQL database, Razorpay payments, Google OAuth, GDPR-compliant analytics, automated email system, and one-command cPanel deployment pipeline.',
      image: '/Gemini_Generated_Image_r8k5bzr8k5bzr8k5.png',
      tags: ['Node.js', 'Express', 'MySQL', 'Razorpay', 'OAuth', 'JWT', 'Analytics'],
      githubUrl: 'https://github.com/SanyamVb/manah_Redesign1',
      liveUrl: 'https://manahveda.com',
      featured: true,
    },
    {
      title: 'Knowledge enabled Voice agent',
      description: 'Real-time Voice AI assistant with RAG capabilities. Features WebRTC-based voice communication, PostgreSQL vector storage with PGVector, and LlamaIndex integration for intelligent responses.',
      image: '/project-livekit.jpg',
      tags: ['LiveKit', 'WebRTC', 'LlamaIndex', 'PostgreSQL', 'PGVector', 'Python'],
      githubUrl: 'https://github.com/SanyamVb/livekit_llama_pgvector',
      featured: true,
    },
    {
      title: 'GraphBuilderAI',
      description: 'AI-powered knowledge graph constructor that extracts entities and relationships from text using GPT-4o-mini building an interactive knowledge graph that persists across multiple analyses within a session. Knowledge graph can be used in advanced RAG applications and LLM prompting.',
      image: '/project-graph.jpg',
      tags: ['React', 'TypeScript', 'OpenAI', 'ReactFlow', 'PostgreSQL', 'Node.js'],
      githubUrl: 'https://github.com/SanyamVb/GraphBuilderAI',
      featured: true,
    },
    {
      title: 'Assist Agent',
      description: 'PowerPoint Insight Extractor that uses AI to analyze presentations and generate actionable executive recommendations. Features proactive workflow system and financial metrics extraction.',
      image: '/project-assist.jpg',
      tags: ['Python', 'FastAPI', 'AI/ML', 'Document Processing', 'Docker'],
      githubUrl: 'https://github.com/SanyamVb/assist_agent',
      featured: true,
    },
    {
      title: 'Token Optimizer',
      description: 'LLM Token Efficiency Tool that optimizes token usage for large language models, reducing costs while maintaining output quality. Features intelligent prompt compression.',
      image: '/project-token.jpg',
      tags: ['Python', 'LLM', 'NLP', 'Tokenization', 'Optimization'],
      githubUrl: 'https://github.com/SanyamVb/token_opt',
      featured: false,
    },
    {
      title: 'Portfolio Optimizer',
      description: 'AI-Driven Investment System for portfolio optimization using modern algorithms. Features risk analysis, return prediction, and automated rebalancing strategies.',
      image: '/project-portfolio.jpg',
      tags: ['Python', 'Finance', 'Machine Learning', 'Optimization', 'Data Analysis'],
      githubUrl: 'https://github.com/SanyamVb/Portfolio_opt',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      ref={sectionRef}
      id="projects"
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
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The Lab
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in AI, machine learning, 
            and full-stack development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative glass-card rounded-3xl overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/80 lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent lg:hidden" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-[#7e6ee3]" />
                    <span className="text-[#7e6ee3] text-sm font-medium">Featured Project</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#7e6ee3] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-white/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/5 text-white/80 border border-white/10 hover:bg-[#7e6ee3]/20 hover:border-[#7e6ee3]/40 transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Github className="mr-2 w-4 h-4" />
                        View Code
                      </Button>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-[#7e6ee3] hover:bg-[#6b5ed1] text-white">
                          <ExternalLink className="mr-2 w-4 h-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 rounded-3xl border-2 border-[#7e6ee3] transition-opacity duration-300 pointer-events-none ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  boxShadow: 'inset 0 0 30px rgba(126, 110, 227, 0.2)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass-card rounded-2xl overflow-hidden transition-all duration-1000 hover:border-[#7e6ee3]/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#7e6ee3] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-white/5 text-white/70 text-xs border border-white/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#7e6ee3] hover:text-white transition-colors duration-300 text-sm"
                >
                  <GitBranch className="mr-2 w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.7s' }}
        >
          <a
            href="https://github.com/SanyamVb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8"
            >
              <Github className="mr-2 w-5 h-5" />
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
