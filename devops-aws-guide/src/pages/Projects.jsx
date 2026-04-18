import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Server, Github, Anchor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      level: "Beginner",
      title: "Deploy Static Website on AWS S3",
      desc: "Host an HTML/CSS/JS site using AWS S3 and enable static website hosting.",
      icon: <Server className="text-orange-500 w-8 h-8" />,
      skills: ["AWS S3", "HTML/CSS", "IAM Basics"]
    },
    {
      level: "Beginner-Intermediate",
      title: "Dockerize a Web Node App",
      desc: "Write a Dockerfile for a Node.js application and run it locally as a container.",
      icon: <Anchor className="text-blue-500 w-8 h-8" />,
      skills: ["Docker", "Linux Basics", "Node.js"]
    },
    {
      level: "Intermediate",
      title: "CI/CD Pipeline with GitHub Actions",
      desc: "Automate code testing and deployment to cloud storage upon git push.",
      icon: <Github className="text-gray-800 dark:text-white w-8 h-8" />,
      skills: ["Git", "GitHub Actions", "YAML"]
    },
    {
      level: "Advanced",
      title: "Kubernetes Cluster Deployment",
      desc: "Deploy a multi-tier web application (frontend + db) into a local Minikube cluster.",
      icon: <Rocket className="text-purple-500 w-8 h-8" />,
      skills: ["Kubernetes", "Docker", "Manifests"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Project Ideas</h1>
        <p className="text-gray-500 dark:text-gray-400">Put theory into practice. Build your portfolio with these tasks.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            key={idx} 
            className="glassmorphism p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                proj.level.includes('Beginner') ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                proj.level.includes('Advanced') ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
              }`}>
                {proj.level}
              </span>
            </div>
            
            <div className="p-4 bg-gray-100 dark:bg-gray-800 inline-block rounded-xl mb-6 group-hover:scale-110 transition-transform">
              {proj.icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-3">{proj.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{proj.desc}</p>
            
            <div className="flex flex-wrap gap-2">
              {proj.skills.map((skill, i) => (
                <span key={i} className="text-xs font-medium bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
