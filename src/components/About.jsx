import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-gradient"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Full-Stack Developer with expertise in <span className="text-cyber-blue font-semibold">MERN Stack</span>, 
              cloud infrastructure, and AI-driven automation. Passionate about building scalable, high-performance 
              applications that solve real-world problems.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Currently working on <span className="text-cyber-purple font-semibold">cloud-native architectures</span> with 
              GCP and exploring cutting-edge technologies in distributed systems and real-time communication.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in architecting <span className="text-cyber-pink font-semibold">secure, performant APIs</span>, 
              implementing WebSocket-based real-time systems, and optimizing frontend performance with modern frameworks.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="card-glow p-6 rounded-xl bg-cyber-dark/50 backdrop-blur-sm border border-cyber-blue/20">
              <h3 className="text-xl font-semibold mb-4 text-cyber-blue">Quick Facts</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyber-pink mr-2">▹</span>
                  <span><strong>Education:</strong> B.Tech in CSE from Manipal Institute of Technology (2022)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-pink mr-2">▹</span>
                  <span><strong>Specialization:</strong> Full-Stack Development, Cloud Engineering, System Design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-pink mr-2">▹</span>
                  <span><strong>Current Role:</strong> Cloud Engineering Trainee at Google Cloud Skills Boost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyber-pink mr-2">▹</span>
                  <span><strong>Achievement:</strong> Global Recognition Award 2022 & 2023 at Bank of America</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
