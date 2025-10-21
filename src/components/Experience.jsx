import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Cloud Engineering Trainee',
      company: 'Google Cloud Skills Boost',
      period: 'Aug 2025 – Present',
      location: 'Remote',
      highlights: [
        'Completed hands-on GCP labs: Compute Engine, Cloud Run, Networking, IAM, Docker containerization',
        'Deployed serverless applications integrating Pub/Sub, Cloud Storage, API Gateway for cloud-native architecture',
      ],
      color: 'from-cyber-blue to-cyber-purple',
    },
    {
      title: 'Full-Stack Developer Intern',
      company: 'EazyByts.com',
      period: 'Sep 2025 – Oct 2025',
      location: 'Remote',
      highlights: [
        'Architected 3 production-grade MERN apps with JWT auth, achieving 5000+ concurrent users via PM2 and horizontal scaling',
        'Engineered real-time notification system using Socket.io with sub-50ms latency, boosting retention 3x through WebSocket',
        'Built Redux Toolkit state management reducing re-renders by 40%, integrated 20+ RESTful endpoints with Joi validation',
        'Deployed analytics dashboards with Recharts visualization, CSV/JSON export, and real-time KPI tracking',
      ],
      color: 'from-cyber-purple to-cyber-pink',
    },
    {
      title: 'Sr. Technical Associate - Backend Developer',
      company: 'Bank of America',
      period: 'Jun 2022 – Apr 2023',
      location: 'Remote',
      highlights: [
        'Developed RESTful APIs using FastAPI supporting 1M+ record datasets, reducing query response time 20% via SQL optimization',
        'Prototyped virtual banking environment in Unreal Engine, earning Global Recognition Award 2022 & 2023',
        'Authored technical documentation improving developer onboarding velocity and knowledge transfer efficiency',
      ],
      color: 'from-cyber-pink to-cyber-blue',
    },
    {
      title: 'Teacher Assistant',
      company: 'Coding Ninjas',
      period: 'Sep 2021 – Jan 2022',
      location: 'Remote',
      highlights: [
        'Mentored 200+ learners in DSA (Python) and SQL, maintaining 4.7/5 rating through optimized code review sessions',
      ],
      color: 'from-cyber-blue to-cyber-pink',
    },
  ];

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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark/30">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-gradient"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="card-glow p-6 rounded-xl bg-cyber-dark/50 backdrop-blur-sm border border-cyber-blue/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-cyber-blue font-mono text-sm">{exp.period}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start text-gray-300"
                  >
                    <span className="text-cyber-pink mr-2 mt-1">▹</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
