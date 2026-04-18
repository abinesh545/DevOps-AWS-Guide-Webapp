import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Compass, BookOpen, Rocket, ShieldCheck, Box } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const cards = [
    { title: 'Learning Roadmap', icon: <Compass className="w-8 h-8 text-blue-500" />, path: '/roadmap', desc: 'Step-by-step path from zero to hero.' },
    { title: 'Tech Stack', icon: <Box className="w-8 h-8 text-orange-500" />, path: '/tech-stack', desc: 'Discover the tools of the trade.' },
    { title: 'Essential Skills', icon: <ShieldCheck className="w-8 h-8 text-green-500" />, path: '/skills', desc: 'Core skills you need to succeed.' },
    { title: 'Top Resources', icon: <BookOpen className="w-8 h-8 text-purple-500" />, path: '/resources', desc: 'Curated free courses, docs & videos.' },
    { title: 'Project Ideas', icon: <Rocket className="w-8 h-8 text-red-500" />, path: '/projects', desc: 'Hands-on projects to build your portfolio.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 pb-12"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <Server className="w-16 h-16 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">DevOps</span> & 
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500"> AWS Cloud</span>
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
          The ultimate beginner-friendly guide to learning DevOps, Cloud Computing, and Automation. Start your journey today!
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link to="/roadmap" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform">
            Start Learning
          </Link>
          <a href="#overview" className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Overview Section */}
      <div id="overview" className="py-16 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">What is DevOps?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity. It bridges the gap between software development (Dev) and IT operations (Ops).
            </p>
            <h2 className="text-3xl font-bold mb-4 border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">Why AWS?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. It is the perfect pair to DevOps practices.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glassmorphism p-8 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>
             <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 dark:bg-black/20 rounded-lg"><Rocket className="text-purple-500 w-6 h-6"/></div>
                  <div><h4 className="font-bold">Continuous Integration</h4><p className="text-sm dark:text-gray-400">Automate code builds & testing</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 dark:bg-black/20 rounded-lg"><Server className="text-green-500 w-6 h-6"/></div>
                  <div><h4 className="font-bold">Infrastructure as Code</h4><p className="text-sm dark:text-gray-400">Manage servers via code</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 dark:bg-black/20 rounded-lg"><ShieldCheck className="text-blue-500 w-6 h-6"/></div>
                  <div><h4 className="font-bold">High Availability</h4><p className="text-sm dark:text-gray-400">Deploy robust, scalable apps</p></div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold">Explore the Hub</h2>
           <p className="text-gray-500 mt-2">Everything you need in one place.</p>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link to={card.path} className="block group h-full">
                <div className="glassmorphism p-6 rounded-2xl transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-blue-500/50 h-full flex flex-col">
                  <div className="mb-4 bg-gray-100 dark:bg-gray-800 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{card.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">{card.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default Home;
