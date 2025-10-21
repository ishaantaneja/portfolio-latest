import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto w-full"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg text-center mb-12 max-w-2xl mx-auto"
        >
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, 
          feel free to reach out!
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="card-glow p-8 rounded-xl bg-cyber-dark/50 backdrop-blur-sm border border-cyber-blue/20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-cyber-blue mb-6">Contact Information</h3>
              
              <motion.a
                href="mailto:tanejaishaan3@gmail.com"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-cyber-darker/50 border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple group-hover:animate-pulse">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-200">tanejaishaan3@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/ishaantaneja"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-cyber-darker/50 border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-pink group-hover:animate-pulse">
                  <FiGithub size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="text-gray-200">github.com/ishaantaneja</p>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/ishaantaneja"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-cyber-darker/50 border border-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyber-pink to-cyber-blue group-hover:animate-pulse">
                  <FiLinkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="text-gray-200">linkedin.com/in/ishaantaneja</p>
                </div>
              </motion.a>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-cyber-purple mb-6">Quick Message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-cyber-darker/50 border border-cyber-blue/20 rounded-lg focus:border-cyber-blue/50 focus:outline-none transition-all duration-300 text-gray-200"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-cyber-darker/50 border border-cyber-blue/20 rounded-lg focus:border-cyber-blue/50 focus:outline-none transition-all duration-300 text-gray-200"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 bg-cyber-darker/50 border border-cyber-blue/20 rounded-lg focus:border-cyber-blue/50 focus:outline-none transition-all duration-300 text-gray-200 resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg card-glow transition-all duration-300"
                >
                  <FiSend /> Send Message
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.footer
          variants={itemVariants}
          className="mt-12 text-center text-gray-400"
        >
          <p className="mb-4">Built with React, Tailwind CSS, and Framer Motion</p>
          <p className="mb-4">Let's develop something truly amazing together.</p>
          <p className="text-sm">© 2025 Ishaan Taneja. All rights reserved.</p>
        </motion.footer>
      </motion.div>
    </section>
  );
};

export default Contact;
