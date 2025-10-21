import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiJavascript, SiPython, SiReact, SiNodedotjs, SiExpress, SiRedux, 
  SiMongodb, SiMysql, SiDocker, SiGit, SiTailwindcss, SiSocketdotio,
  SiGooglecloud, SiFastapi, SiHtml5, SiCss3
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: 'Languages & Frameworks',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'Redux.js', icon: SiRedux, color: '#764ABC' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      ],
    },
    {
      category: 'Databases & Tools',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'Git/GitHub', icon: SiGit, color: '#F05032' },
        { name: 'Socket.io', icon: SiSocketdotio, color: '#010101' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark/30">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          variants={categoryVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-gradient"
        >
          Technical Skills
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div key={catIndex} variants={categoryVariants}>
              <h3 className="text-2xl font-semibold text-cyber-blue mb-6">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.15, 
                      rotateY: 180,
                      transition: { duration: 0.3 }
                    }}
                    className="card-glow p-6 rounded-xl bg-cyber-dark/50 backdrop-blur-sm border border-cyber-blue/20 flex flex-col items-center justify-center gap-3 group transition-all duration-300"
                  >
                    <skill.icon 
                      size={48} 
                      className="group-hover:animate-pulse transition-all duration-300"
                      style={{ color: skill.color }}
                    />
                    <span className="text-gray-300 text-sm font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={categoryVariants}
          className="mt-12 p-8 card-glow rounded-xl bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border border-cyber-blue/30"
        >
          <h3 className="text-2xl font-semibold text-cyber-purple mb-4">Specializations</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Full-Stack Development',
              'Real-Time Systems',
              'API Architecture',
              'Secure SDLC',
              'Agile',
              'System Design',
              'Cloud-Native Apps',
              'Performance Optimization',
            ].map((spec, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                className="px-4 py-2 bg-gradient-to-r from-cyber-pink/20 to-cyber-blue/20 border border-cyber-pink/30 rounded-full text-cyber-pink font-medium"
              >
                {spec}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
