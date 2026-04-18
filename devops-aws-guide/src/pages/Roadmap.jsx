import React from 'react';
import { motion } from 'framer-motion';
import { Server, Terminal, Box, Cloud, GitMerge, FileCode } from 'lucide-react';

const Roadmap = () => {
  const steps = [
    {
      id: 1,
      title: 'Basics & Foundations',
      description: 'Understanding the core mechanisms of computing.',
      icon: <Terminal className="w-6 h-6 text-green-500" />,
      topics: ['Linux OS Basics', 'Networking (DNS, HTTP/S, TCP/IP)', 'Git & GitHub'],
    },
    {
      id: 2,
      title: 'Programming & Scripting',
      description: 'Automating tasks and infrastructure.',
      icon: <FileCode className="w-6 h-6 text-purple-500" />,
      topics: ['Python basics', 'Bash/Shell scripting', 'JSON & YAML'],
    },
    {
      id: 3,
      title: 'Containers & Orchestration',
      description: 'Packaging and managing applications.',
      icon: <Box className="w-6 h-6 text-blue-500" />,
      topics: ['Docker (Containers)', 'Kubernetes (K8s) Basics', 'Docker Compose'],
    },
    {
      id: 4,
      title: 'Cloud Computing (AWS)',
      description: 'Hosting and scaling applications in the cloud.',
      icon: <Cloud className="w-6 h-6 text-orange-500" />,
      topics: ['EC2 (Servers)', 'S3 (Storage)', 'IAM (Security)', 'VPC', 'RDS (Database)'],
    },
    {
      id: 5,
      title: 'CI/CD pipelines',
      description: 'Continuous Integration & Continuous Deployment.',
      icon: <GitMerge className="w-6 h-6 text-red-500" />,
      topics: ['GitHub Actions', 'Jenkins', 'GitLab CI'],
    },
    {
      id: 6,
      title: 'Infrastructure as Code (IaC)',
      description: 'Managing cloud infrastructure via code.',
      icon: <Server className="w-6 h-6 text-teal-500" />,
      topics: ['Terraform', 'Ansible', 'AWS CloudFormation'],
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">DevOps Learning Roadmap</h1>
        <p className="text-gray-500 dark:text-gray-400">Follow this step-by-step path to master DevOps from scratch.</p>
      </div>

      <div className="relative border-l-4 border-blue-500 ml-6 md:ml-0 md:mx-auto md:w-full md:border-none">
        <div className="hidden md:block absolute w-1 h-full bg-blue-100 dark:bg-blue-900 left-1/2 transform -translate-x-1/2"></div>
        
        {steps.map((step, index) => (
          <motion.div 
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center justify-between md:justify-normal w-full mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="hidden md:block w-5/12"></div>
            
            <div className="absolute left-[-24px] md:left-1/2 transform md:-translate-x-1/2 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 flex items-center justify-center">
               {step.icon}
            </div>
            
            <div className="w-full md:w-5/12 ml-8 md:ml-0 glassmorphism p-6 rounded-xl hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-2">Step {step.id}: {step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{step.description}</p>
              <ul className="space-y-2">
                {step.topics.map((topic, i) => (
                  <li key={i} className="flex items-center text-sm font-medium">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
