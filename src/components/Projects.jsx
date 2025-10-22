import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Event Manager Platform',
      description: 'Scalable B2C/B2B platform with real-time bidirectional communication achieving sub-50ms latency. Implemented security stack: JWT, bcrypt, helmet middleware, express-rate-limit for DDoS protection.',
      tech: ['MERN', 'Socket.io', 'JWT', 'Redux'],
      github: 'https://github.com/ishaantaneja/event-manager',
      live: null,
      color: 'from-cyber-blue to-cyber-purple',
    },
    {
      title: 'Stock Market Dashboard',
      description: 'Trading simulator with real-time data ingestion, live P&L tracking, and lightweight-charts visualization. Implemented Progressive Web App architecture with mobile-first responsive design.',
      tech: ['MERN', 'WebSocket', 'FinnHub API'],
      github: 'https://github.com/ishaantaneja/stock-dashboard',
      live: null,
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      title: 'Content Automation Engine',
      description: 'Automated content generation pipeline for YouTube Shorts/Reels using LLMs and KittenTTS for content monetization. Streamlined video creation workflow reducing production time by 80%.',
      tech: ['Python', 'LLMs', 'TTS'],
      github: 'https://github.com/ishaantaneja/automated_content_engine',
      live: null,
      color: 'from-cyber-pink to-cyber-blue',
    },
    {
      title: 'Game 2048',
      description: 'Lightweight game engine (sub-50KB bundle) as plug-and-play loading screen, reducing bounce rates during downtime.',
      tech: ['Vanilla JavaScript'],
      github: 'https://github.com/ishaantaneja/Game_2048',
      live: null,
      color: 'from-cyber-blue to-cyber-pink',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          variants={cardVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-gradient"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="card-glow p-6 rounded-xl bg-cyber-dark/50 backdrop-blur-sm border border-cyber-blue/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 hover:text-cyber-blue transition-colors"
                  >
                    <FiGithub size={24} />
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 hover:text-cyber-pink transition-colors"
                    >
                      <FiExternalLink size={24} />
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 text-sm bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 border border-cyber-blue/30 rounded-full text-cyber-blue"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
