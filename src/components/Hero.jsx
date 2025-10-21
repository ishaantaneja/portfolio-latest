import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full text-center"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-cyber-blue text-sm sm:text-base font-mono">Hi, my name is</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4"
        >
          <span className="text-gradient glow-text animate-pulse-slow">Ishaan Taneja</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-300 mb-6"
        >
          Full-Stack Developer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8"
        >
          AI-Driven Workflow Optimization | Building scalable web applications with cutting-edge technology
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            href="https://github.com/ishaantaneja"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg card-glow transition-all duration-300"
          >
            <FiGithub /> GitHub
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/ishaantaneja"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-lg card-glow transition-all duration-300"
          >
            <FiLinkedin /> LinkedIn
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 border-2 border-cyber-blue rounded-lg hover:bg-cyber-blue/10 transition-all duration-300"
          >
            <FiMail /> Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="animate-bounce"
        >
          <a href="#about" className="inline-block text-cyber-blue">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
